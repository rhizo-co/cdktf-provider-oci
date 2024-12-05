# `psqlConfiguration` Submodule <a name="`psqlConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.psqlConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PsqlConfiguration <a name="PsqlConfiguration" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration oci_psql_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.Initializer"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

new psqlConfiguration.PsqlConfiguration(scope: Construct, id: string, config: PsqlConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig">PsqlConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig">PsqlConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.putDbConfigurationOverrides">putDbConfigurationOverrides</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetInstanceMemorySizeInGbs">resetInstanceMemorySizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetInstanceOcpuCount">resetInstanceOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetIsFlexible">resetIsFlexible</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetSystemTags">resetSystemTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDbConfigurationOverrides` <a name="putDbConfigurationOverrides" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.putDbConfigurationOverrides"></a>

```typescript
public putDbConfigurationOverrides(value: PsqlConfigurationDbConfigurationOverrides): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.putDbConfigurationOverrides.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverrides">PsqlConfigurationDbConfigurationOverrides</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: PsqlConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeouts">PsqlConfigurationTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceMemorySizeInGbs` <a name="resetInstanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetInstanceMemorySizeInGbs"></a>

```typescript
public resetInstanceMemorySizeInGbs(): void
```

##### `resetInstanceOcpuCount` <a name="resetInstanceOcpuCount" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetInstanceOcpuCount"></a>

```typescript
public resetInstanceOcpuCount(): void
```

##### `resetIsFlexible` <a name="resetIsFlexible" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetIsFlexible"></a>

```typescript
public resetIsFlexible(): void
```

##### `resetSystemTags` <a name="resetSystemTags" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetSystemTags"></a>

```typescript
public resetSystemTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PsqlConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.isConstruct"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

psqlConfiguration.PsqlConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.isTerraformElement"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

psqlConfiguration.PsqlConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.isTerraformResource"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

psqlConfiguration.PsqlConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.generateConfigForImport"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

psqlConfiguration.PsqlConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PsqlConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PsqlConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PsqlConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PsqlConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.configType">configType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.configurationDetails">configurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList">PsqlConfigurationConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.dbConfigurationOverrides">dbConfigurationOverrides</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference">PsqlConfigurationDbConfigurationOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference">PsqlConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.dbConfigurationOverridesInput">dbConfigurationOverridesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverrides">PsqlConfigurationDbConfigurationOverrides</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.dbVersionInput">dbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.instanceMemorySizeInGbsInput">instanceMemorySizeInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.instanceOcpuCountInput">instanceOcpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.isFlexibleInput">isFlexibleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.shapeInput">shapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.systemTagsInput">systemTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeouts">PsqlConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.dbVersion">dbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.instanceMemorySizeInGbs">instanceMemorySizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.instanceOcpuCount">instanceOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.isFlexible">isFlexible</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.systemTags">systemTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

---

##### `configurationDetails`<sup>Required</sup> <a name="configurationDetails" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.configurationDetails"></a>

```typescript
public readonly configurationDetails: PsqlConfigurationConfigurationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList">PsqlConfigurationConfigurationDetailsList</a>

---

##### `dbConfigurationOverrides`<sup>Required</sup> <a name="dbConfigurationOverrides" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.dbConfigurationOverrides"></a>

```typescript
public readonly dbConfigurationOverrides: PsqlConfigurationDbConfigurationOverridesOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference">PsqlConfigurationDbConfigurationOverridesOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: PsqlConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference">PsqlConfigurationTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dbConfigurationOverridesInput`<sup>Optional</sup> <a name="dbConfigurationOverridesInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.dbConfigurationOverridesInput"></a>

```typescript
public readonly dbConfigurationOverridesInput: PsqlConfigurationDbConfigurationOverrides;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverrides">PsqlConfigurationDbConfigurationOverrides</a>

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.dbVersionInput"></a>

```typescript
public readonly dbVersionInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceMemorySizeInGbsInput`<sup>Optional</sup> <a name="instanceMemorySizeInGbsInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.instanceMemorySizeInGbsInput"></a>

```typescript
public readonly instanceMemorySizeInGbsInput: number;
```

- *Type:* number

---

##### `instanceOcpuCountInput`<sup>Optional</sup> <a name="instanceOcpuCountInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.instanceOcpuCountInput"></a>

```typescript
public readonly instanceOcpuCountInput: number;
```

- *Type:* number

---

##### `isFlexibleInput`<sup>Optional</sup> <a name="isFlexibleInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.isFlexibleInput"></a>

```typescript
public readonly isFlexibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.shapeInput"></a>

```typescript
public readonly shapeInput: string;
```

- *Type:* string

---

##### `systemTagsInput`<sup>Optional</sup> <a name="systemTagsInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.systemTagsInput"></a>

```typescript
public readonly systemTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PsqlConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeouts">PsqlConfigurationTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceMemorySizeInGbs`<sup>Required</sup> <a name="instanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.instanceMemorySizeInGbs"></a>

```typescript
public readonly instanceMemorySizeInGbs: number;
```

- *Type:* number

---

##### `instanceOcpuCount`<sup>Required</sup> <a name="instanceOcpuCount" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.instanceOcpuCount"></a>

```typescript
public readonly instanceOcpuCount: number;
```

- *Type:* number

---

##### `isFlexible`<sup>Required</sup> <a name="isFlexible" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.isFlexible"></a>

```typescript
public readonly isFlexible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.systemTags"></a>

```typescript
public readonly systemTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PsqlConfigurationConfig <a name="PsqlConfigurationConfig" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.Initializer"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

const psqlConfigurationConfig: psqlConfiguration.PsqlConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#compartment_id PsqlConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.dbConfigurationOverrides">dbConfigurationOverrides</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverrides">PsqlConfigurationDbConfigurationOverrides</a></code> | db_configuration_overrides block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.dbVersion">dbVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#db_version PsqlConfiguration#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#display_name PsqlConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.shape">shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#shape PsqlConfiguration#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#defined_tags PsqlConfiguration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#description PsqlConfiguration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#freeform_tags PsqlConfiguration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#id PsqlConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.instanceMemorySizeInGbs">instanceMemorySizeInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#instance_memory_size_in_gbs PsqlConfiguration#instance_memory_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.instanceOcpuCount">instanceOcpuCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#instance_ocpu_count PsqlConfiguration#instance_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.isFlexible">isFlexible</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#is_flexible PsqlConfiguration#is_flexible}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.systemTags">systemTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#system_tags PsqlConfiguration#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeouts">PsqlConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#compartment_id PsqlConfiguration#compartment_id}.

---

##### `dbConfigurationOverrides`<sup>Required</sup> <a name="dbConfigurationOverrides" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.dbConfigurationOverrides"></a>

```typescript
public readonly dbConfigurationOverrides: PsqlConfigurationDbConfigurationOverrides;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverrides">PsqlConfigurationDbConfigurationOverrides</a>

db_configuration_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#db_configuration_overrides PsqlConfiguration#db_configuration_overrides}

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#db_version PsqlConfiguration#db_version}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#display_name PsqlConfiguration#display_name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#shape PsqlConfiguration#shape}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#defined_tags PsqlConfiguration#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#description PsqlConfiguration#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#freeform_tags PsqlConfiguration#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#id PsqlConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceMemorySizeInGbs`<sup>Optional</sup> <a name="instanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.instanceMemorySizeInGbs"></a>

```typescript
public readonly instanceMemorySizeInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#instance_memory_size_in_gbs PsqlConfiguration#instance_memory_size_in_gbs}.

---

##### `instanceOcpuCount`<sup>Optional</sup> <a name="instanceOcpuCount" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.instanceOcpuCount"></a>

```typescript
public readonly instanceOcpuCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#instance_ocpu_count PsqlConfiguration#instance_ocpu_count}.

---

##### `isFlexible`<sup>Optional</sup> <a name="isFlexible" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.isFlexible"></a>

```typescript
public readonly isFlexible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#is_flexible PsqlConfiguration#is_flexible}.

---

##### `systemTags`<sup>Optional</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.systemTags"></a>

```typescript
public readonly systemTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#system_tags PsqlConfiguration#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PsqlConfigurationTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeouts">PsqlConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#timeouts PsqlConfiguration#timeouts}

---

### PsqlConfigurationConfigurationDetails <a name="PsqlConfigurationConfigurationDetails" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetails.Initializer"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

const psqlConfigurationConfigurationDetails: psqlConfiguration.PsqlConfigurationConfigurationDetails = { ... }
```


### PsqlConfigurationConfigurationDetailsItems <a name="PsqlConfigurationConfigurationDetailsItems" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItems.Initializer"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

const psqlConfigurationConfigurationDetailsItems: psqlConfiguration.PsqlConfigurationConfigurationDetailsItems = { ... }
```


### PsqlConfigurationDbConfigurationOverrides <a name="PsqlConfigurationDbConfigurationOverrides" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverrides"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverrides.Initializer"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

const psqlConfigurationDbConfigurationOverrides: psqlConfiguration.PsqlConfigurationDbConfigurationOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverrides.property.items">items</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItems">PsqlConfigurationDbConfigurationOverridesItems</a>[]</code> | items block. |

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverrides.property.items"></a>

```typescript
public readonly items: IResolvable | PsqlConfigurationDbConfigurationOverridesItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItems">PsqlConfigurationDbConfigurationOverridesItems</a>[]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#items PsqlConfiguration#items}

---

### PsqlConfigurationDbConfigurationOverridesItems <a name="PsqlConfigurationDbConfigurationOverridesItems" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItems.Initializer"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

const psqlConfigurationDbConfigurationOverridesItems: psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItems.property.configKey">configKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#config_key PsqlConfiguration#config_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItems.property.overridenConfigValue">overridenConfigValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#overriden_config_value PsqlConfiguration#overriden_config_value}. |

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItems.property.configKey"></a>

```typescript
public readonly configKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#config_key PsqlConfiguration#config_key}.

---

##### `overridenConfigValue`<sup>Required</sup> <a name="overridenConfigValue" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItems.property.overridenConfigValue"></a>

```typescript
public readonly overridenConfigValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#overriden_config_value PsqlConfiguration#overriden_config_value}.

---

### PsqlConfigurationTimeouts <a name="PsqlConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeouts.Initializer"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

const psqlConfigurationTimeouts: psqlConfiguration.PsqlConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#create PsqlConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#delete PsqlConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#update PsqlConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#create PsqlConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#delete PsqlConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_configuration#update PsqlConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PsqlConfigurationConfigurationDetailsItemsList <a name="PsqlConfigurationConfigurationDetailsItemsList" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.Initializer"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

new psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.get"></a>

```typescript
public get(index: number): PsqlConfigurationConfigurationDetailsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### PsqlConfigurationConfigurationDetailsItemsOutputReference <a name="PsqlConfigurationConfigurationDetailsItemsOutputReference" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.Initializer"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

new psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.allowedValues">allowedValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.configKey">configKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.defaultConfigValue">defaultConfigValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.isOverridable">isOverridable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.isRestartRequired">isRestartRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.overridenConfigValue">overridenConfigValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItems">PsqlConfigurationConfigurationDetailsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: string;
```

- *Type:* string

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.configKey"></a>

```typescript
public readonly configKey: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `defaultConfigValue`<sup>Required</sup> <a name="defaultConfigValue" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.defaultConfigValue"></a>

```typescript
public readonly defaultConfigValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isOverridable`<sup>Required</sup> <a name="isOverridable" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.isOverridable"></a>

```typescript
public readonly isOverridable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRestartRequired`<sup>Required</sup> <a name="isRestartRequired" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.isRestartRequired"></a>

```typescript
public readonly isRestartRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `overridenConfigValue`<sup>Required</sup> <a name="overridenConfigValue" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.overridenConfigValue"></a>

```typescript
public readonly overridenConfigValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PsqlConfigurationConfigurationDetailsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItems">PsqlConfigurationConfigurationDetailsItems</a>

---


### PsqlConfigurationConfigurationDetailsList <a name="PsqlConfigurationConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.Initializer"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

new psqlConfiguration.PsqlConfigurationConfigurationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.get"></a>

```typescript
public get(index: number): PsqlConfigurationConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### PsqlConfigurationConfigurationDetailsOutputReference <a name="PsqlConfigurationConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

new psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList">PsqlConfigurationConfigurationDetailsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetails">PsqlConfigurationConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.property.items"></a>

```typescript
public readonly items: PsqlConfigurationConfigurationDetailsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsItemsList">PsqlConfigurationConfigurationDetailsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PsqlConfigurationConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationConfigurationDetails">PsqlConfigurationConfigurationDetails</a>

---


### PsqlConfigurationDbConfigurationOverridesItemsList <a name="PsqlConfigurationDbConfigurationOverridesItemsList" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.Initializer"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

new psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.get"></a>

```typescript
public get(index: number): PsqlConfigurationDbConfigurationOverridesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItems">PsqlConfigurationDbConfigurationOverridesItems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PsqlConfigurationDbConfigurationOverridesItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItems">PsqlConfigurationDbConfigurationOverridesItems</a>[]

---


### PsqlConfigurationDbConfigurationOverridesItemsOutputReference <a name="PsqlConfigurationDbConfigurationOverridesItemsOutputReference" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.Initializer"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

new psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.property.configKeyInput">configKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.property.overridenConfigValueInput">overridenConfigValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.property.configKey">configKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.property.overridenConfigValue">overridenConfigValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItems">PsqlConfigurationDbConfigurationOverridesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configKeyInput`<sup>Optional</sup> <a name="configKeyInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.property.configKeyInput"></a>

```typescript
public readonly configKeyInput: string;
```

- *Type:* string

---

##### `overridenConfigValueInput`<sup>Optional</sup> <a name="overridenConfigValueInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.property.overridenConfigValueInput"></a>

```typescript
public readonly overridenConfigValueInput: string;
```

- *Type:* string

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.property.configKey"></a>

```typescript
public readonly configKey: string;
```

- *Type:* string

---

##### `overridenConfigValue`<sup>Required</sup> <a name="overridenConfigValue" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.property.overridenConfigValue"></a>

```typescript
public readonly overridenConfigValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PsqlConfigurationDbConfigurationOverridesItems;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItems">PsqlConfigurationDbConfigurationOverridesItems</a>

---


### PsqlConfigurationDbConfigurationOverridesOutputReference <a name="PsqlConfigurationDbConfigurationOverridesOutputReference" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.Initializer"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

new psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.putItems">putItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.putItems"></a>

```typescript
public putItems(value: IResolvable | PsqlConfigurationDbConfigurationOverridesItems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.putItems.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItems">PsqlConfigurationDbConfigurationOverridesItems</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList">PsqlConfigurationDbConfigurationOverridesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.property.itemsInput">itemsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItems">PsqlConfigurationDbConfigurationOverridesItems</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverrides">PsqlConfigurationDbConfigurationOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.property.items"></a>

```typescript
public readonly items: PsqlConfigurationDbConfigurationOverridesItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItemsList">PsqlConfigurationDbConfigurationOverridesItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: IResolvable | PsqlConfigurationDbConfigurationOverridesItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesItems">PsqlConfigurationDbConfigurationOverridesItems</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PsqlConfigurationDbConfigurationOverrides;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationDbConfigurationOverrides">PsqlConfigurationDbConfigurationOverrides</a>

---


### PsqlConfigurationTimeoutsOutputReference <a name="PsqlConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { psqlConfiguration } from 'rhizo-co-terraform-provider-oci'

new psqlConfiguration.PsqlConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeouts">PsqlConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PsqlConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlConfiguration.PsqlConfigurationTimeouts">PsqlConfigurationTimeouts</a>

---



