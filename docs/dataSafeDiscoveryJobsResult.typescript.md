# `dataSafeDiscoveryJobsResult` Submodule <a name="`dataSafeDiscoveryJobsResult` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeDiscoveryJobsResult <a name="DataSafeDiscoveryJobsResult" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result oci_data_safe_discovery_jobs_result}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer"></a>

```typescript
import { dataSafeDiscoveryJobsResult } from 'rhizo-co-terraform-provider-oci'

new dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult(scope: Construct, id: string, config: DataSafeDiscoveryJobsResultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig">DataSafeDiscoveryJobsResultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig">DataSafeDiscoveryJobsResultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeDiscoveryJobsResultTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts">DataSafeDiscoveryJobsResultTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeDiscoveryJobsResult resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isConstruct"></a>

```typescript
import { dataSafeDiscoveryJobsResult } from 'rhizo-co-terraform-provider-oci'

dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformElement"></a>

```typescript
import { dataSafeDiscoveryJobsResult } from 'rhizo-co-terraform-provider-oci'

dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformResource"></a>

```typescript
import { dataSafeDiscoveryJobsResult } from 'rhizo-co-terraform-provider-oci'

dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport"></a>

```typescript
import { dataSafeDiscoveryJobsResult } from 'rhizo-co-terraform-provider-oci'

dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeDiscoveryJobsResult resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeDiscoveryJobsResult to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeDiscoveryJobsResult that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeDiscoveryJobsResult to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.appDefinedChildColumnKeys">appDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.appName">appName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.dbDefinedChildColumnKeys">dbDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.discoveryType">discoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.estimatedDataValueCount">estimatedDataValueCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.isResultApplied">isResultApplied</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.modifiedAttributes">modifiedAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList">DataSafeDiscoveryJobsResultModifiedAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.parentColumnKeys">parentColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.plannedAction">plannedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.relationType">relationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.sampleDataValues">sampleDataValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.sensitiveColumnkey">sensitiveColumnkey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference">DataSafeDiscoveryJobsResultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.discoveryJobIdInput">discoveryJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts">DataSafeDiscoveryJobsResultTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.discoveryJobId">discoveryJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appDefinedChildColumnKeys`<sup>Required</sup> <a name="appDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.appDefinedChildColumnKeys"></a>

```typescript
public readonly appDefinedChildColumnKeys: string[];
```

- *Type:* string[]

---

##### `appName`<sup>Required</sup> <a name="appName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `dbDefinedChildColumnKeys`<sup>Required</sup> <a name="dbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.dbDefinedChildColumnKeys"></a>

```typescript
public readonly dbDefinedChildColumnKeys: string[];
```

- *Type:* string[]

---

##### `discoveryType`<sup>Required</sup> <a name="discoveryType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.discoveryType"></a>

```typescript
public readonly discoveryType: string;
```

- *Type:* string

---

##### `estimatedDataValueCount`<sup>Required</sup> <a name="estimatedDataValueCount" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.estimatedDataValueCount"></a>

```typescript
public readonly estimatedDataValueCount: string;
```

- *Type:* string

---

##### `isResultApplied`<sup>Required</sup> <a name="isResultApplied" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.isResultApplied"></a>

```typescript
public readonly isResultApplied: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `modifiedAttributes`<sup>Required</sup> <a name="modifiedAttributes" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.modifiedAttributes"></a>

```typescript
public readonly modifiedAttributes: DataSafeDiscoveryJobsResultModifiedAttributesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList">DataSafeDiscoveryJobsResultModifiedAttributesList</a>

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `parentColumnKeys`<sup>Required</sup> <a name="parentColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.parentColumnKeys"></a>

```typescript
public readonly parentColumnKeys: string[];
```

- *Type:* string[]

---

##### `plannedAction`<sup>Required</sup> <a name="plannedAction" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.plannedAction"></a>

```typescript
public readonly plannedAction: string;
```

- *Type:* string

---

##### `relationType`<sup>Required</sup> <a name="relationType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.relationType"></a>

```typescript
public readonly relationType: string;
```

- *Type:* string

---

##### `sampleDataValues`<sup>Required</sup> <a name="sampleDataValues" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.sampleDataValues"></a>

```typescript
public readonly sampleDataValues: string[];
```

- *Type:* string[]

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sensitiveColumnkey`<sup>Required</sup> <a name="sensitiveColumnkey" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.sensitiveColumnkey"></a>

```typescript
public readonly sensitiveColumnkey: string;
```

- *Type:* string

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeDiscoveryJobsResultTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference">DataSafeDiscoveryJobsResultTimeoutsOutputReference</a>

---

##### `discoveryJobIdInput`<sup>Optional</sup> <a name="discoveryJobIdInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.discoveryJobIdInput"></a>

```typescript
public readonly discoveryJobIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeDiscoveryJobsResultTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts">DataSafeDiscoveryJobsResultTimeouts</a>

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.discoveryJobId"></a>

```typescript
public readonly discoveryJobId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeDiscoveryJobsResultConfig <a name="DataSafeDiscoveryJobsResultConfig" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.Initializer"></a>

```typescript
import { dataSafeDiscoveryJobsResult } from 'rhizo-co-terraform-provider-oci'

const dataSafeDiscoveryJobsResultConfig: dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.discoveryJobId">discoveryJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#discovery_job_id DataSafeDiscoveryJobsResult#discovery_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#id DataSafeDiscoveryJobsResult#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts">DataSafeDiscoveryJobsResultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.discoveryJobId"></a>

```typescript
public readonly discoveryJobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#discovery_job_id DataSafeDiscoveryJobsResult#discovery_job_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#id DataSafeDiscoveryJobsResult#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeDiscoveryJobsResultTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts">DataSafeDiscoveryJobsResultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#timeouts DataSafeDiscoveryJobsResult#timeouts}

---

### DataSafeDiscoveryJobsResultModifiedAttributes <a name="DataSafeDiscoveryJobsResultModifiedAttributes" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributes.Initializer"></a>

```typescript
import { dataSafeDiscoveryJobsResult } from 'rhizo-co-terraform-provider-oci'

const dataSafeDiscoveryJobsResultModifiedAttributes: dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributes = { ... }
```


### DataSafeDiscoveryJobsResultTimeouts <a name="DataSafeDiscoveryJobsResultTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.Initializer"></a>

```typescript
import { dataSafeDiscoveryJobsResult } from 'rhizo-co-terraform-provider-oci'

const dataSafeDiscoveryJobsResultTimeouts: dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#create DataSafeDiscoveryJobsResult#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#delete DataSafeDiscoveryJobsResult#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#update DataSafeDiscoveryJobsResult#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#create DataSafeDiscoveryJobsResult#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#delete DataSafeDiscoveryJobsResult#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#update DataSafeDiscoveryJobsResult#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeDiscoveryJobsResultModifiedAttributesList <a name="DataSafeDiscoveryJobsResultModifiedAttributesList" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer"></a>

```typescript
import { dataSafeDiscoveryJobsResult } from 'rhizo-co-terraform-provider-oci'

new dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.get"></a>

```typescript
public get(index: number): DataSafeDiscoveryJobsResultModifiedAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSafeDiscoveryJobsResultModifiedAttributesOutputReference <a name="DataSafeDiscoveryJobsResultModifiedAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer"></a>

```typescript
import { dataSafeDiscoveryJobsResult } from 'rhizo-co-terraform-provider-oci'

new dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.appDefinedChildColumnKeys">appDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.dbDefinedChildColumnKeys">dbDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributes">DataSafeDiscoveryJobsResultModifiedAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appDefinedChildColumnKeys`<sup>Required</sup> <a name="appDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.appDefinedChildColumnKeys"></a>

```typescript
public readonly appDefinedChildColumnKeys: string[];
```

- *Type:* string[]

---

##### `dbDefinedChildColumnKeys`<sup>Required</sup> <a name="dbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.dbDefinedChildColumnKeys"></a>

```typescript
public readonly dbDefinedChildColumnKeys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSafeDiscoveryJobsResultModifiedAttributes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributes">DataSafeDiscoveryJobsResultModifiedAttributes</a>

---


### DataSafeDiscoveryJobsResultTimeoutsOutputReference <a name="DataSafeDiscoveryJobsResultTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeDiscoveryJobsResult } from 'rhizo-co-terraform-provider-oci'

new dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts">DataSafeDiscoveryJobsResultTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeDiscoveryJobsResultTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts">DataSafeDiscoveryJobsResultTimeouts</a>

---



