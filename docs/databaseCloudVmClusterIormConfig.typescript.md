# `databaseCloudVmClusterIormConfig` Submodule <a name="`databaseCloudVmClusterIormConfig` Submodule" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseCloudVmClusterIormConfig <a name="DatabaseCloudVmClusterIormConfig" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config oci_database_cloud_vm_cluster_iorm_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer"></a>

```typescript
import { databaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

new databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig(scope: Construct, id: string, config: DatabaseCloudVmClusterIormConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig">DatabaseCloudVmClusterIormConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig">DatabaseCloudVmClusterIormConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putDbPlans">putDbPlans</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetObjective">resetObjective</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDbPlans` <a name="putDbPlans" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putDbPlans"></a>

```typescript
public putDbPlans(value: IResolvable | DatabaseCloudVmClusterIormConfigDbPlans[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putDbPlans.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseCloudVmClusterIormConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetObjective` <a name="resetObjective" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetObjective"></a>

```typescript
public resetObjective(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseCloudVmClusterIormConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isConstruct"></a>

```typescript
import { databaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformElement"></a>

```typescript
import { databaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformResource"></a>

```typescript
import { databaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport"></a>

```typescript
import { databaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseCloudVmClusterIormConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseCloudVmClusterIormConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseCloudVmClusterIormConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseCloudVmClusterIormConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.dbPlans">dbPlans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList">DatabaseCloudVmClusterIormConfigDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference">DatabaseCloudVmClusterIormConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.cloudVmClusterIdInput">cloudVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.dbPlansInput">dbPlansInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.objectiveInput">objectiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.objective">objective</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dbPlans`<sup>Required</sup> <a name="dbPlans" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.dbPlans"></a>

```typescript
public readonly dbPlans: DatabaseCloudVmClusterIormConfigDbPlansList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList">DatabaseCloudVmClusterIormConfigDbPlansList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseCloudVmClusterIormConfigTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference">DatabaseCloudVmClusterIormConfigTimeoutsOutputReference</a>

---

##### `cloudVmClusterIdInput`<sup>Optional</sup> <a name="cloudVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.cloudVmClusterIdInput"></a>

```typescript
public readonly cloudVmClusterIdInput: string;
```

- *Type:* string

---

##### `dbPlansInput`<sup>Optional</sup> <a name="dbPlansInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.dbPlansInput"></a>

```typescript
public readonly dbPlansInput: IResolvable | DatabaseCloudVmClusterIormConfigDbPlans[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `objectiveInput`<sup>Optional</sup> <a name="objectiveInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.objectiveInput"></a>

```typescript
public readonly objectiveInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseCloudVmClusterIormConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a>

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.cloudVmClusterId"></a>

```typescript
public readonly cloudVmClusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `objective`<sup>Required</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.objective"></a>

```typescript
public readonly objective: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseCloudVmClusterIormConfigConfig <a name="DatabaseCloudVmClusterIormConfigConfig" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.Initializer"></a>

```typescript
import { databaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

const databaseCloudVmClusterIormConfigConfig: databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#cloud_vm_cluster_id DatabaseCloudVmClusterIormConfig#cloud_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.dbPlans">dbPlans</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>[]</code> | db_plans block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#id DatabaseCloudVmClusterIormConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.objective">objective</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#objective DatabaseCloudVmClusterIormConfig#objective}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.cloudVmClusterId"></a>

```typescript
public readonly cloudVmClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#cloud_vm_cluster_id DatabaseCloudVmClusterIormConfig#cloud_vm_cluster_id}.

---

##### `dbPlans`<sup>Required</sup> <a name="dbPlans" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.dbPlans"></a>

```typescript
public readonly dbPlans: IResolvable | DatabaseCloudVmClusterIormConfigDbPlans[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>[]

db_plans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#db_plans DatabaseCloudVmClusterIormConfig#db_plans}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#id DatabaseCloudVmClusterIormConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objective`<sup>Optional</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.objective"></a>

```typescript
public readonly objective: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#objective DatabaseCloudVmClusterIormConfig#objective}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseCloudVmClusterIormConfigTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#timeouts DatabaseCloudVmClusterIormConfig#timeouts}

---

### DatabaseCloudVmClusterIormConfigDbPlans <a name="DatabaseCloudVmClusterIormConfigDbPlans" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans.Initializer"></a>

```typescript
import { databaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

const databaseCloudVmClusterIormConfigDbPlans: databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans.property.dbName">dbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#db_name DatabaseCloudVmClusterIormConfig#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans.property.share">share</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#share DatabaseCloudVmClusterIormConfig#share}. |

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#db_name DatabaseCloudVmClusterIormConfig#db_name}.

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans.property.share"></a>

```typescript
public readonly share: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#share DatabaseCloudVmClusterIormConfig#share}.

---

### DatabaseCloudVmClusterIormConfigTimeouts <a name="DatabaseCloudVmClusterIormConfigTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.Initializer"></a>

```typescript
import { databaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

const databaseCloudVmClusterIormConfigTimeouts: databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#create DatabaseCloudVmClusterIormConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#delete DatabaseCloudVmClusterIormConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#update DatabaseCloudVmClusterIormConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#create DatabaseCloudVmClusterIormConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#delete DatabaseCloudVmClusterIormConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#update DatabaseCloudVmClusterIormConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseCloudVmClusterIormConfigDbPlansList <a name="DatabaseCloudVmClusterIormConfigDbPlansList" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer"></a>

```typescript
import { databaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

new databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.get"></a>

```typescript
public get(index: number): DatabaseCloudVmClusterIormConfigDbPlansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseCloudVmClusterIormConfigDbPlans[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>[]

---


### DatabaseCloudVmClusterIormConfigDbPlansOutputReference <a name="DatabaseCloudVmClusterIormConfigDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer"></a>

```typescript
import { databaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

new databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.flashCacheLimit">flashCacheLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.dbNameInput">dbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.shareInput">shareInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.share">share</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flashCacheLimit`<sup>Required</sup> <a name="flashCacheLimit" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.flashCacheLimit"></a>

```typescript
public readonly flashCacheLimit: string;
```

- *Type:* string

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.dbNameInput"></a>

```typescript
public readonly dbNameInput: string;
```

- *Type:* string

---

##### `shareInput`<sup>Optional</sup> <a name="shareInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.shareInput"></a>

```typescript
public readonly shareInput: number;
```

- *Type:* number

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.share"></a>

```typescript
public readonly share: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseCloudVmClusterIormConfigDbPlans;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>

---


### DatabaseCloudVmClusterIormConfigTimeoutsOutputReference <a name="DatabaseCloudVmClusterIormConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseCloudVmClusterIormConfig } from 'rhizo-co-terraform-provider-oci'

new databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseCloudVmClusterIormConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a>

---



