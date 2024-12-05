# `databaseManagementExternalClusterInstance` Submodule <a name="`databaseManagementExternalClusterInstance` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalClusterInstance <a name="DatabaseManagementExternalClusterInstance" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance oci_database_management_external_cluster_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.Initializer"></a>

```typescript
import { databaseManagementExternalClusterInstance } from 'rhizo-co-terraform-provider-oci'

new databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance(scope: Construct, id: string, config: DatabaseManagementExternalClusterInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig">DatabaseManagementExternalClusterInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig">DatabaseManagementExternalClusterInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.resetExternalConnectorId">resetExternalConnectorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseManagementExternalClusterInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeouts">DatabaseManagementExternalClusterInstanceTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetExternalConnectorId` <a name="resetExternalConnectorId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.resetExternalConnectorId"></a>

```typescript
public resetExternalConnectorId(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalClusterInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.isConstruct"></a>

```typescript
import { databaseManagementExternalClusterInstance } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.isTerraformElement"></a>

```typescript
import { databaseManagementExternalClusterInstance } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.isTerraformResource"></a>

```typescript
import { databaseManagementExternalClusterInstance } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.generateConfigForImport"></a>

```typescript
import { databaseManagementExternalClusterInstance } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseManagementExternalClusterInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseManagementExternalClusterInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseManagementExternalClusterInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalClusterInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.adrHomeDirectory">adrHomeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.componentName">componentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.crsBaseDirectory">crsBaseDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.externalClusterId">externalClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.externalDbNodeId">externalDbNodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.externalDbSystemId">externalDbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.nodeRole">nodeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference">DatabaseManagementExternalClusterInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.externalClusterInstanceIdInput">externalClusterInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.externalConnectorIdInput">externalConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeouts">DatabaseManagementExternalClusterInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.externalClusterInstanceId">externalClusterInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.externalConnectorId">externalConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adrHomeDirectory`<sup>Required</sup> <a name="adrHomeDirectory" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.adrHomeDirectory"></a>

```typescript
public readonly adrHomeDirectory: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `componentName`<sup>Required</sup> <a name="componentName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.componentName"></a>

```typescript
public readonly componentName: string;
```

- *Type:* string

---

##### `crsBaseDirectory`<sup>Required</sup> <a name="crsBaseDirectory" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.crsBaseDirectory"></a>

```typescript
public readonly crsBaseDirectory: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalClusterId`<sup>Required</sup> <a name="externalClusterId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.externalClusterId"></a>

```typescript
public readonly externalClusterId: string;
```

- *Type:* string

---

##### `externalDbNodeId`<sup>Required</sup> <a name="externalDbNodeId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.externalDbNodeId"></a>

```typescript
public readonly externalDbNodeId: string;
```

- *Type:* string

---

##### `externalDbSystemId`<sup>Required</sup> <a name="externalDbSystemId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.externalDbSystemId"></a>

```typescript
public readonly externalDbSystemId: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `nodeRole`<sup>Required</sup> <a name="nodeRole" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.nodeRole"></a>

```typescript
public readonly nodeRole: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseManagementExternalClusterInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference">DatabaseManagementExternalClusterInstanceTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `externalClusterInstanceIdInput`<sup>Optional</sup> <a name="externalClusterInstanceIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.externalClusterInstanceIdInput"></a>

```typescript
public readonly externalClusterInstanceIdInput: string;
```

- *Type:* string

---

##### `externalConnectorIdInput`<sup>Optional</sup> <a name="externalConnectorIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.externalConnectorIdInput"></a>

```typescript
public readonly externalConnectorIdInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseManagementExternalClusterInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeouts">DatabaseManagementExternalClusterInstanceTimeouts</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `externalClusterInstanceId`<sup>Required</sup> <a name="externalClusterInstanceId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.externalClusterInstanceId"></a>

```typescript
public readonly externalClusterInstanceId: string;
```

- *Type:* string

---

##### `externalConnectorId`<sup>Required</sup> <a name="externalConnectorId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.externalConnectorId"></a>

```typescript
public readonly externalConnectorId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalClusterInstanceConfig <a name="DatabaseManagementExternalClusterInstanceConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.Initializer"></a>

```typescript
import { databaseManagementExternalClusterInstance } from 'rhizo-co-terraform-provider-oci'

const databaseManagementExternalClusterInstanceConfig: databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.externalClusterInstanceId">externalClusterInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance#external_cluster_instance_id DatabaseManagementExternalClusterInstance#external_cluster_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance#defined_tags DatabaseManagementExternalClusterInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.externalConnectorId">externalConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance#external_connector_id DatabaseManagementExternalClusterInstance#external_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance#freeform_tags DatabaseManagementExternalClusterInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance#id DatabaseManagementExternalClusterInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeouts">DatabaseManagementExternalClusterInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `externalClusterInstanceId`<sup>Required</sup> <a name="externalClusterInstanceId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.externalClusterInstanceId"></a>

```typescript
public readonly externalClusterInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance#external_cluster_instance_id DatabaseManagementExternalClusterInstance#external_cluster_instance_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance#defined_tags DatabaseManagementExternalClusterInstance#defined_tags}.

---

##### `externalConnectorId`<sup>Optional</sup> <a name="externalConnectorId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.externalConnectorId"></a>

```typescript
public readonly externalConnectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance#external_connector_id DatabaseManagementExternalClusterInstance#external_connector_id}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance#freeform_tags DatabaseManagementExternalClusterInstance#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance#id DatabaseManagementExternalClusterInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseManagementExternalClusterInstanceTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeouts">DatabaseManagementExternalClusterInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance#timeouts DatabaseManagementExternalClusterInstance#timeouts}

---

### DatabaseManagementExternalClusterInstanceTimeouts <a name="DatabaseManagementExternalClusterInstanceTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeouts.Initializer"></a>

```typescript
import { databaseManagementExternalClusterInstance } from 'rhizo-co-terraform-provider-oci'

const databaseManagementExternalClusterInstanceTimeouts: databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance#create DatabaseManagementExternalClusterInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance#delete DatabaseManagementExternalClusterInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance#update DatabaseManagementExternalClusterInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance#create DatabaseManagementExternalClusterInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance#delete DatabaseManagementExternalClusterInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_cluster_instance#update DatabaseManagementExternalClusterInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalClusterInstanceTimeoutsOutputReference <a name="DatabaseManagementExternalClusterInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseManagementExternalClusterInstance } from 'rhizo-co-terraform-provider-oci'

new databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeouts">DatabaseManagementExternalClusterInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseManagementExternalClusterInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalClusterInstance.DatabaseManagementExternalClusterInstanceTimeouts">DatabaseManagementExternalClusterInstanceTimeouts</a>

---



