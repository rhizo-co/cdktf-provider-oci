# `cloudGuardDataSource` Submodule <a name="`cloudGuardDataSource` Submodule" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGuardDataSource <a name="CloudGuardDataSource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source oci_cloud_guard_data_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new cloudGuardDataSource.CloudGuardDataSource(scope: Construct, id: string, config: CloudGuardDataSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig">CloudGuardDataSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig">CloudGuardDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.putDataSourceDetails">putDataSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetDataSourceDetails">resetDataSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataSourceDetails` <a name="putDataSourceDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.putDataSourceDetails"></a>

```typescript
public putDataSourceDetails(value: CloudGuardDataSourceDataSourceDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.putDataSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails">CloudGuardDataSourceDataSourceDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudGuardDataSourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts">CloudGuardDataSourceTimeouts</a>

---

##### `resetDataSourceDetails` <a name="resetDataSourceDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetDataSourceDetails"></a>

```typescript
public resetDataSourceDetails(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudGuardDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.isConstruct"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

cloudGuardDataSource.CloudGuardDataSource.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.isTerraformElement"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

cloudGuardDataSource.CloudGuardDataSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.isTerraformResource"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

cloudGuardDataSource.CloudGuardDataSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.generateConfigForImport"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

cloudGuardDataSource.CloudGuardDataSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudGuardDataSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudGuardDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudGuardDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudGuardDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceDetails">dataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference">CloudGuardDataSourceDataSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceDetectorMappingInfo">dataSourceDetectorMappingInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList">CloudGuardDataSourceDataSourceDetectorMappingInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.regionStatusDetail">regionStatusDetail</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList">CloudGuardDataSourceRegionStatusDetailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference">CloudGuardDataSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceDetailsInput">dataSourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails">CloudGuardDataSourceDataSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceFeedProviderInput">dataSourceFeedProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts">CloudGuardDataSourceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataSourceDetails`<sup>Required</sup> <a name="dataSourceDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceDetails"></a>

```typescript
public readonly dataSourceDetails: CloudGuardDataSourceDataSourceDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference">CloudGuardDataSourceDataSourceDetailsOutputReference</a>

---

##### `dataSourceDetectorMappingInfo`<sup>Required</sup> <a name="dataSourceDetectorMappingInfo" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceDetectorMappingInfo"></a>

```typescript
public readonly dataSourceDetectorMappingInfo: CloudGuardDataSourceDataSourceDetectorMappingInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList">CloudGuardDataSourceDataSourceDetectorMappingInfoList</a>

---

##### `regionStatusDetail`<sup>Required</sup> <a name="regionStatusDetail" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.regionStatusDetail"></a>

```typescript
public readonly regionStatusDetail: CloudGuardDataSourceRegionStatusDetailList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList">CloudGuardDataSourceRegionStatusDetailList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.timeouts"></a>

```typescript
public readonly timeouts: CloudGuardDataSourceTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference">CloudGuardDataSourceTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dataSourceDetailsInput`<sup>Optional</sup> <a name="dataSourceDetailsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceDetailsInput"></a>

```typescript
public readonly dataSourceDetailsInput: CloudGuardDataSourceDataSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails">CloudGuardDataSourceDataSourceDetails</a>

---

##### `dataSourceFeedProviderInput`<sup>Optional</sup> <a name="dataSourceFeedProviderInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceFeedProviderInput"></a>

```typescript
public readonly dataSourceFeedProviderInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudGuardDataSourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts">CloudGuardDataSourceTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dataSourceFeedProvider`<sup>Required</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceFeedProvider"></a>

```typescript
public readonly dataSourceFeedProvider: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGuardDataSourceConfig <a name="CloudGuardDataSourceConfig" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

const cloudGuardDataSourceConfig: cloudGuardDataSource.CloudGuardDataSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#compartment_id CloudGuardDataSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#data_source_feed_provider CloudGuardDataSource#data_source_feed_provider}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#display_name CloudGuardDataSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.dataSourceDetails">dataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails">CloudGuardDataSourceDataSourceDetails</a></code> | data_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#defined_tags CloudGuardDataSource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#freeform_tags CloudGuardDataSource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#id CloudGuardDataSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#status CloudGuardDataSource#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts">CloudGuardDataSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#compartment_id CloudGuardDataSource#compartment_id}.

---

##### `dataSourceFeedProvider`<sup>Required</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.dataSourceFeedProvider"></a>

```typescript
public readonly dataSourceFeedProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#data_source_feed_provider CloudGuardDataSource#data_source_feed_provider}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#display_name CloudGuardDataSource#display_name}.

---

##### `dataSourceDetails`<sup>Optional</sup> <a name="dataSourceDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.dataSourceDetails"></a>

```typescript
public readonly dataSourceDetails: CloudGuardDataSourceDataSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails">CloudGuardDataSourceDataSourceDetails</a>

data_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#data_source_details CloudGuardDataSource#data_source_details}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#defined_tags CloudGuardDataSource#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#freeform_tags CloudGuardDataSource#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#id CloudGuardDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#status CloudGuardDataSource#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudGuardDataSourceTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts">CloudGuardDataSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#timeouts CloudGuardDataSource#timeouts}

---

### CloudGuardDataSourceDataSourceDetails <a name="CloudGuardDataSourceDataSourceDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

const cloudGuardDataSourceDataSourceDetails: cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#data_source_feed_provider CloudGuardDataSource#data_source_feed_provider}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.additionalEntitiesCount">additionalEntitiesCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#additional_entities_count CloudGuardDataSource#additional_entities_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#description CloudGuardDataSource#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.intervalInMinutes">intervalInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#interval_in_minutes CloudGuardDataSource#interval_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#interval_in_seconds CloudGuardDataSource#interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.loggingQueryDetails">loggingQueryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails">CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails</a></code> | logging_query_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.loggingQueryType">loggingQueryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#logging_query_type CloudGuardDataSource#logging_query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#operator CloudGuardDataSource#operator}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.query">query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#query CloudGuardDataSource#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.queryStartTime">queryStartTime</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime">CloudGuardDataSourceDataSourceDetailsQueryStartTime</a></code> | query_start_time block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.regions">regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#regions CloudGuardDataSource#regions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.scheduledQueryScopeDetails">scheduledQueryScopeDetails</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a>[]</code> | scheduled_query_scope_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#threshold CloudGuardDataSource#threshold}. |

---

##### `dataSourceFeedProvider`<sup>Required</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.dataSourceFeedProvider"></a>

```typescript
public readonly dataSourceFeedProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#data_source_feed_provider CloudGuardDataSource#data_source_feed_provider}.

---

##### `additionalEntitiesCount`<sup>Optional</sup> <a name="additionalEntitiesCount" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.additionalEntitiesCount"></a>

```typescript
public readonly additionalEntitiesCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#additional_entities_count CloudGuardDataSource#additional_entities_count}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#description CloudGuardDataSource#description}.

---

##### `intervalInMinutes`<sup>Optional</sup> <a name="intervalInMinutes" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.intervalInMinutes"></a>

```typescript
public readonly intervalInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#interval_in_minutes CloudGuardDataSource#interval_in_minutes}.

---

##### `intervalInSeconds`<sup>Optional</sup> <a name="intervalInSeconds" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#interval_in_seconds CloudGuardDataSource#interval_in_seconds}.

---

##### `loggingQueryDetails`<sup>Optional</sup> <a name="loggingQueryDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.loggingQueryDetails"></a>

```typescript
public readonly loggingQueryDetails: CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails">CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails</a>

logging_query_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#logging_query_details CloudGuardDataSource#logging_query_details}

---

##### `loggingQueryType`<sup>Optional</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.loggingQueryType"></a>

```typescript
public readonly loggingQueryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#logging_query_type CloudGuardDataSource#logging_query_type}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#operator CloudGuardDataSource#operator}.

---

##### `query`<sup>Optional</sup> <a name="query" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#query CloudGuardDataSource#query}.

---

##### `queryStartTime`<sup>Optional</sup> <a name="queryStartTime" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.queryStartTime"></a>

```typescript
public readonly queryStartTime: CloudGuardDataSourceDataSourceDetailsQueryStartTime;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime">CloudGuardDataSourceDataSourceDetailsQueryStartTime</a>

query_start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#query_start_time CloudGuardDataSource#query_start_time}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#regions CloudGuardDataSource#regions}.

---

##### `scheduledQueryScopeDetails`<sup>Optional</sup> <a name="scheduledQueryScopeDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.scheduledQueryScopeDetails"></a>

```typescript
public readonly scheduledQueryScopeDetails: IResolvable | CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a>[]

scheduled_query_scope_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#scheduled_query_scope_details CloudGuardDataSource#scheduled_query_scope_details}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#threshold CloudGuardDataSource#threshold}.

---

### CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails <a name="CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

const cloudGuardDataSourceDataSourceDetailsLoggingQueryDetails: cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails.property.loggingQueryType">loggingQueryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#logging_query_type CloudGuardDataSource#logging_query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails.property.keyEntitiesCount">keyEntitiesCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#key_entities_count CloudGuardDataSource#key_entities_count}. |

---

##### `loggingQueryType`<sup>Required</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails.property.loggingQueryType"></a>

```typescript
public readonly loggingQueryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#logging_query_type CloudGuardDataSource#logging_query_type}.

---

##### `keyEntitiesCount`<sup>Optional</sup> <a name="keyEntitiesCount" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails.property.keyEntitiesCount"></a>

```typescript
public readonly keyEntitiesCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#key_entities_count CloudGuardDataSource#key_entities_count}.

---

### CloudGuardDataSourceDataSourceDetailsQueryStartTime <a name="CloudGuardDataSourceDataSourceDetailsQueryStartTime" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

const cloudGuardDataSourceDataSourceDetailsQueryStartTime: cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime.property.startPolicyType">startPolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#start_policy_type CloudGuardDataSource#start_policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime.property.queryStartTime">queryStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#query_start_time CloudGuardDataSource#query_start_time}. |

---

##### `startPolicyType`<sup>Required</sup> <a name="startPolicyType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime.property.startPolicyType"></a>

```typescript
public readonly startPolicyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#start_policy_type CloudGuardDataSource#start_policy_type}.

---

##### `queryStartTime`<sup>Optional</sup> <a name="queryStartTime" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime.property.queryStartTime"></a>

```typescript
public readonly queryStartTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#query_start_time CloudGuardDataSource#query_start_time}.

---

### CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails <a name="CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

const cloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails: cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#region CloudGuardDataSource#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails.property.resourceIds">resourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#resource_ids CloudGuardDataSource#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#resource_type CloudGuardDataSource#resource_type}. |

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#region CloudGuardDataSource#region}.

---

##### `resourceIds`<sup>Optional</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails.property.resourceIds"></a>

```typescript
public readonly resourceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#resource_ids CloudGuardDataSource#resource_ids}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#resource_type CloudGuardDataSource#resource_type}.

---

### CloudGuardDataSourceDataSourceDetectorMappingInfo <a name="CloudGuardDataSourceDataSourceDetectorMappingInfo" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfo.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

const cloudGuardDataSourceDataSourceDetectorMappingInfo: cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfo = { ... }
```


### CloudGuardDataSourceRegionStatusDetail <a name="CloudGuardDataSourceRegionStatusDetail" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetail.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

const cloudGuardDataSourceRegionStatusDetail: cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetail = { ... }
```


### CloudGuardDataSourceTimeouts <a name="CloudGuardDataSourceTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

const cloudGuardDataSourceTimeouts: cloudGuardDataSource.CloudGuardDataSourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#create CloudGuardDataSource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#delete CloudGuardDataSource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#update CloudGuardDataSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#create CloudGuardDataSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#delete CloudGuardDataSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#update CloudGuardDataSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference <a name="CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.resetKeyEntitiesCount">resetKeyEntitiesCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyEntitiesCount` <a name="resetKeyEntitiesCount" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.resetKeyEntitiesCount"></a>

```typescript
public resetKeyEntitiesCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.keyEntitiesCountInput">keyEntitiesCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.loggingQueryTypeInput">loggingQueryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.keyEntitiesCount">keyEntitiesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.loggingQueryType">loggingQueryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails">CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyEntitiesCountInput`<sup>Optional</sup> <a name="keyEntitiesCountInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.keyEntitiesCountInput"></a>

```typescript
public readonly keyEntitiesCountInput: number;
```

- *Type:* number

---

##### `loggingQueryTypeInput`<sup>Optional</sup> <a name="loggingQueryTypeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.loggingQueryTypeInput"></a>

```typescript
public readonly loggingQueryTypeInput: string;
```

- *Type:* string

---

##### `keyEntitiesCount`<sup>Required</sup> <a name="keyEntitiesCount" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.keyEntitiesCount"></a>

```typescript
public readonly keyEntitiesCount: number;
```

- *Type:* number

---

##### `loggingQueryType`<sup>Required</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.loggingQueryType"></a>

```typescript
public readonly loggingQueryType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails">CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails</a>

---


### CloudGuardDataSourceDataSourceDetailsOutputReference <a name="CloudGuardDataSourceDataSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.putLoggingQueryDetails">putLoggingQueryDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.putQueryStartTime">putQueryStartTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.putScheduledQueryScopeDetails">putScheduledQueryScopeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetAdditionalEntitiesCount">resetAdditionalEntitiesCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetIntervalInMinutes">resetIntervalInMinutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetIntervalInSeconds">resetIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetLoggingQueryDetails">resetLoggingQueryDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetLoggingQueryType">resetLoggingQueryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetQueryStartTime">resetQueryStartTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetScheduledQueryScopeDetails">resetScheduledQueryScopeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingQueryDetails` <a name="putLoggingQueryDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.putLoggingQueryDetails"></a>

```typescript
public putLoggingQueryDetails(value: CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.putLoggingQueryDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails">CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails</a>

---

##### `putQueryStartTime` <a name="putQueryStartTime" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.putQueryStartTime"></a>

```typescript
public putQueryStartTime(value: CloudGuardDataSourceDataSourceDetailsQueryStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.putQueryStartTime.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime">CloudGuardDataSourceDataSourceDetailsQueryStartTime</a>

---

##### `putScheduledQueryScopeDetails` <a name="putScheduledQueryScopeDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.putScheduledQueryScopeDetails"></a>

```typescript
public putScheduledQueryScopeDetails(value: IResolvable | CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.putScheduledQueryScopeDetails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a>[]

---

##### `resetAdditionalEntitiesCount` <a name="resetAdditionalEntitiesCount" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetAdditionalEntitiesCount"></a>

```typescript
public resetAdditionalEntitiesCount(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIntervalInMinutes` <a name="resetIntervalInMinutes" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetIntervalInMinutes"></a>

```typescript
public resetIntervalInMinutes(): void
```

##### `resetIntervalInSeconds` <a name="resetIntervalInSeconds" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetIntervalInSeconds"></a>

```typescript
public resetIntervalInSeconds(): void
```

##### `resetLoggingQueryDetails` <a name="resetLoggingQueryDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetLoggingQueryDetails"></a>

```typescript
public resetLoggingQueryDetails(): void
```

##### `resetLoggingQueryType` <a name="resetLoggingQueryType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetLoggingQueryType"></a>

```typescript
public resetLoggingQueryType(): void
```

##### `resetOperator` <a name="resetOperator" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetQuery` <a name="resetQuery" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetQueryStartTime` <a name="resetQueryStartTime" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetQueryStartTime"></a>

```typescript
public resetQueryStartTime(): void
```

##### `resetRegions` <a name="resetRegions" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetRegions"></a>

```typescript
public resetRegions(): void
```

##### `resetScheduledQueryScopeDetails` <a name="resetScheduledQueryScopeDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetScheduledQueryScopeDetails"></a>

```typescript
public resetScheduledQueryScopeDetails(): void
```

##### `resetThreshold` <a name="resetThreshold" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryDetails">loggingQueryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference">CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.queryStartTime">queryStartTime</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference">CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.scheduledQueryScopeDetails">scheduledQueryScopeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.additionalEntitiesCountInput">additionalEntitiesCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.dataSourceFeedProviderInput">dataSourceFeedProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInMinutesInput">intervalInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInSecondsInput">intervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryDetailsInput">loggingQueryDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails">CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryTypeInput">loggingQueryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.queryStartTimeInput">queryStartTimeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime">CloudGuardDataSourceDataSourceDetailsQueryStartTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.scheduledQueryScopeDetailsInput">scheduledQueryScopeDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.additionalEntitiesCount">additionalEntitiesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInMinutes">intervalInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryType">loggingQueryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails">CloudGuardDataSourceDataSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loggingQueryDetails`<sup>Required</sup> <a name="loggingQueryDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryDetails"></a>

```typescript
public readonly loggingQueryDetails: CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference">CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference</a>

---

##### `queryStartTime`<sup>Required</sup> <a name="queryStartTime" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.queryStartTime"></a>

```typescript
public readonly queryStartTime: CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference">CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference</a>

---

##### `scheduledQueryScopeDetails`<sup>Required</sup> <a name="scheduledQueryScopeDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.scheduledQueryScopeDetails"></a>

```typescript
public readonly scheduledQueryScopeDetails: CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList</a>

---

##### `additionalEntitiesCountInput`<sup>Optional</sup> <a name="additionalEntitiesCountInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.additionalEntitiesCountInput"></a>

```typescript
public readonly additionalEntitiesCountInput: number;
```

- *Type:* number

---

##### `dataSourceFeedProviderInput`<sup>Optional</sup> <a name="dataSourceFeedProviderInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.dataSourceFeedProviderInput"></a>

```typescript
public readonly dataSourceFeedProviderInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `intervalInMinutesInput`<sup>Optional</sup> <a name="intervalInMinutesInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInMinutesInput"></a>

```typescript
public readonly intervalInMinutesInput: number;
```

- *Type:* number

---

##### `intervalInSecondsInput`<sup>Optional</sup> <a name="intervalInSecondsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInSecondsInput"></a>

```typescript
public readonly intervalInSecondsInput: number;
```

- *Type:* number

---

##### `loggingQueryDetailsInput`<sup>Optional</sup> <a name="loggingQueryDetailsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryDetailsInput"></a>

```typescript
public readonly loggingQueryDetailsInput: CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails">CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails</a>

---

##### `loggingQueryTypeInput`<sup>Optional</sup> <a name="loggingQueryTypeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryTypeInput"></a>

```typescript
public readonly loggingQueryTypeInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `queryStartTimeInput`<sup>Optional</sup> <a name="queryStartTimeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.queryStartTimeInput"></a>

```typescript
public readonly queryStartTimeInput: CloudGuardDataSourceDataSourceDetailsQueryStartTime;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime">CloudGuardDataSourceDataSourceDetailsQueryStartTime</a>

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `scheduledQueryScopeDetailsInput`<sup>Optional</sup> <a name="scheduledQueryScopeDetailsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.scheduledQueryScopeDetailsInput"></a>

```typescript
public readonly scheduledQueryScopeDetailsInput: IResolvable | CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a>[]

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `additionalEntitiesCount`<sup>Required</sup> <a name="additionalEntitiesCount" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.additionalEntitiesCount"></a>

```typescript
public readonly additionalEntitiesCount: number;
```

- *Type:* number

---

##### `dataSourceFeedProvider`<sup>Required</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.dataSourceFeedProvider"></a>

```typescript
public readonly dataSourceFeedProvider: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `intervalInMinutes`<sup>Required</sup> <a name="intervalInMinutes" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInMinutes"></a>

```typescript
public readonly intervalInMinutes: number;
```

- *Type:* number

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

---

##### `loggingQueryType`<sup>Required</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryType"></a>

```typescript
public readonly loggingQueryType: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGuardDataSourceDataSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails">CloudGuardDataSourceDataSourceDetails</a>

---


### CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference <a name="CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.resetQueryStartTime">resetQueryStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryStartTime` <a name="resetQueryStartTime" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.resetQueryStartTime"></a>

```typescript
public resetQueryStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.queryStartTimeInput">queryStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.startPolicyTypeInput">startPolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.queryStartTime">queryStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.startPolicyType">startPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime">CloudGuardDataSourceDataSourceDetailsQueryStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryStartTimeInput`<sup>Optional</sup> <a name="queryStartTimeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.queryStartTimeInput"></a>

```typescript
public readonly queryStartTimeInput: string;
```

- *Type:* string

---

##### `startPolicyTypeInput`<sup>Optional</sup> <a name="startPolicyTypeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.startPolicyTypeInput"></a>

```typescript
public readonly startPolicyTypeInput: string;
```

- *Type:* string

---

##### `queryStartTime`<sup>Required</sup> <a name="queryStartTime" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.queryStartTime"></a>

```typescript
public readonly queryStartTime: string;
```

- *Type:* string

---

##### `startPolicyType`<sup>Required</sup> <a name="startPolicyType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.startPolicyType"></a>

```typescript
public readonly startPolicyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGuardDataSourceDataSourceDetailsQueryStartTime;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime">CloudGuardDataSourceDataSourceDetailsQueryStartTime</a>

---


### CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList <a name="CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.get"></a>

```typescript
public get(index: number): CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a>[]

---


### CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference <a name="CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resetResourceIds">resetResourceIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegion` <a name="resetRegion" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetResourceIds` <a name="resetResourceIds" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resetResourceIds"></a>

```typescript
public resetResourceIds(): void
```

##### `resetResourceType` <a name="resetResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resetResourceType"></a>

```typescript
public resetResourceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceIdsInput">resourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceIds">resourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `resourceIdsInput`<sup>Optional</sup> <a name="resourceIdsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceIdsInput"></a>

```typescript
public readonly resourceIdsInput: string[];
```

- *Type:* string[]

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceIds"></a>

```typescript
public readonly resourceIds: string[];
```

- *Type:* string[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a>

---


### CloudGuardDataSourceDataSourceDetectorMappingInfoList <a name="CloudGuardDataSourceDataSourceDetectorMappingInfoList" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.get"></a>

```typescript
public get(index: number): CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference <a name="CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.detectorRecipeId">detectorRecipeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.detectorRuleId">detectorRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfo">CloudGuardDataSourceDataSourceDetectorMappingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `detectorRecipeId`<sup>Required</sup> <a name="detectorRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.detectorRecipeId"></a>

```typescript
public readonly detectorRecipeId: string;
```

- *Type:* string

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.detectorRuleId"></a>

```typescript
public readonly detectorRuleId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGuardDataSourceDataSourceDetectorMappingInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfo">CloudGuardDataSourceDataSourceDetectorMappingInfo</a>

---


### CloudGuardDataSourceRegionStatusDetailList <a name="CloudGuardDataSourceRegionStatusDetailList" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.get"></a>

```typescript
public get(index: number): CloudGuardDataSourceRegionStatusDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudGuardDataSourceRegionStatusDetailOutputReference <a name="CloudGuardDataSourceRegionStatusDetailOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetail">CloudGuardDataSourceRegionStatusDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudGuardDataSourceRegionStatusDetail;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetail">CloudGuardDataSourceRegionStatusDetail</a>

---


### CloudGuardDataSourceTimeoutsOutputReference <a name="CloudGuardDataSourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudGuardDataSource } from 'rhizo-co-terraform-provider-oci'

new cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts">CloudGuardDataSourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudGuardDataSourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts">CloudGuardDataSourceTimeouts</a>

---



