# `dataSafeUnsetUserAssessmentBaselineManagement` Submodule <a name="`dataSafeUnsetUserAssessmentBaselineManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeUnsetUserAssessmentBaselineManagement <a name="DataSafeUnsetUserAssessmentBaselineManagement" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_user_assessment_baseline_management oci_data_safe_unset_user_assessment_baseline_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.Initializer"></a>

```typescript
import { dataSafeUnsetUserAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement(scope: Construct, id: string, config: DataSafeUnsetUserAssessmentBaselineManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig">DataSafeUnsetUserAssessmentBaselineManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig">DataSafeUnsetUserAssessmentBaselineManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeUnsetUserAssessmentBaselineManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeouts">DataSafeUnsetUserAssessmentBaselineManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeUnsetUserAssessmentBaselineManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.isConstruct"></a>

```typescript
import { dataSafeUnsetUserAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.isTerraformElement"></a>

```typescript
import { dataSafeUnsetUserAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.isTerraformResource"></a>

```typescript
import { dataSafeUnsetUserAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.generateConfigForImport"></a>

```typescript
import { dataSafeUnsetUserAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeUnsetUserAssessmentBaselineManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeUnsetUserAssessmentBaselineManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeUnsetUserAssessmentBaselineManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_user_assessment_baseline_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeUnsetUserAssessmentBaselineManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference">DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeouts">DataSafeUnsetUserAssessmentBaselineManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.userAssessmentIdInput">userAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.userAssessmentId">userAssessmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference">DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeUnsetUserAssessmentBaselineManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeouts">DataSafeUnsetUserAssessmentBaselineManagementTimeouts</a>

---

##### `userAssessmentIdInput`<sup>Optional</sup> <a name="userAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.userAssessmentIdInput"></a>

```typescript
public readonly userAssessmentIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.userAssessmentId"></a>

```typescript
public readonly userAssessmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeUnsetUserAssessmentBaselineManagementConfig <a name="DataSafeUnsetUserAssessmentBaselineManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.Initializer"></a>

```typescript
import { dataSafeUnsetUserAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeUnsetUserAssessmentBaselineManagementConfig: dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_user_assessment_baseline_management#compartment_id DataSafeUnsetUserAssessmentBaselineManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.userAssessmentId">userAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_user_assessment_baseline_management#user_assessment_id DataSafeUnsetUserAssessmentBaselineManagement#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_user_assessment_baseline_management#id DataSafeUnsetUserAssessmentBaselineManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeouts">DataSafeUnsetUserAssessmentBaselineManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_user_assessment_baseline_management#compartment_id DataSafeUnsetUserAssessmentBaselineManagement#compartment_id}.

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.userAssessmentId"></a>

```typescript
public readonly userAssessmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_user_assessment_baseline_management#user_assessment_id DataSafeUnsetUserAssessmentBaselineManagement#user_assessment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_user_assessment_baseline_management#id DataSafeUnsetUserAssessmentBaselineManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeUnsetUserAssessmentBaselineManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeouts">DataSafeUnsetUserAssessmentBaselineManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_user_assessment_baseline_management#timeouts DataSafeUnsetUserAssessmentBaselineManagement#timeouts}

---

### DataSafeUnsetUserAssessmentBaselineManagementTimeouts <a name="DataSafeUnsetUserAssessmentBaselineManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeouts.Initializer"></a>

```typescript
import { dataSafeUnsetUserAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeUnsetUserAssessmentBaselineManagementTimeouts: dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_user_assessment_baseline_management#create DataSafeUnsetUserAssessmentBaselineManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_user_assessment_baseline_management#delete DataSafeUnsetUserAssessmentBaselineManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_user_assessment_baseline_management#update DataSafeUnsetUserAssessmentBaselineManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_user_assessment_baseline_management#create DataSafeUnsetUserAssessmentBaselineManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_user_assessment_baseline_management#delete DataSafeUnsetUserAssessmentBaselineManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_user_assessment_baseline_management#update DataSafeUnsetUserAssessmentBaselineManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference <a name="DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeUnsetUserAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeouts">DataSafeUnsetUserAssessmentBaselineManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeUnsetUserAssessmentBaselineManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetUserAssessmentBaselineManagement.DataSafeUnsetUserAssessmentBaselineManagementTimeouts">DataSafeUnsetUserAssessmentBaselineManagementTimeouts</a>

---



