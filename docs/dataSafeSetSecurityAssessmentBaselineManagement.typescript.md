# `dataSafeSetSecurityAssessmentBaselineManagement` Submodule <a name="`dataSafeSetSecurityAssessmentBaselineManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSetSecurityAssessmentBaselineManagement <a name="DataSafeSetSecurityAssessmentBaselineManagement" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management oci_data_safe_set_security_assessment_baseline_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer"></a>

```typescript
import { dataSafeSetSecurityAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement(scope: Construct, id: string, config: DataSafeSetSecurityAssessmentBaselineManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig">DataSafeSetSecurityAssessmentBaselineManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig">DataSafeSetSecurityAssessmentBaselineManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeSetSecurityAssessmentBaselineManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts">DataSafeSetSecurityAssessmentBaselineManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSetSecurityAssessmentBaselineManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isConstruct"></a>

```typescript
import { dataSafeSetSecurityAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformElement"></a>

```typescript
import { dataSafeSetSecurityAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformResource"></a>

```typescript
import { dataSafeSetSecurityAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport"></a>

```typescript
import { dataSafeSetSecurityAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeSetSecurityAssessmentBaselineManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeSetSecurityAssessmentBaselineManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeSetSecurityAssessmentBaselineManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSetSecurityAssessmentBaselineManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.assessmentIds">assessmentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.securityAssessmentId">securityAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference">DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts">DataSafeSetSecurityAssessmentBaselineManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assessmentIds`<sup>Required</sup> <a name="assessmentIds" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.assessmentIds"></a>

```typescript
public readonly assessmentIds: string[];
```

- *Type:* string[]

---

##### `securityAssessmentId`<sup>Required</sup> <a name="securityAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.securityAssessmentId"></a>

```typescript
public readonly securityAssessmentId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference">DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeSetSecurityAssessmentBaselineManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts">DataSafeSetSecurityAssessmentBaselineManagementTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSetSecurityAssessmentBaselineManagementConfig <a name="DataSafeSetSecurityAssessmentBaselineManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.Initializer"></a>

```typescript
import { dataSafeSetSecurityAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeSetSecurityAssessmentBaselineManagementConfig: dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#compartment_id DataSafeSetSecurityAssessmentBaselineManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#target_id DataSafeSetSecurityAssessmentBaselineManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#id DataSafeSetSecurityAssessmentBaselineManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts">DataSafeSetSecurityAssessmentBaselineManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#compartment_id DataSafeSetSecurityAssessmentBaselineManagement#compartment_id}.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#target_id DataSafeSetSecurityAssessmentBaselineManagement#target_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#id DataSafeSetSecurityAssessmentBaselineManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeSetSecurityAssessmentBaselineManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts">DataSafeSetSecurityAssessmentBaselineManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#timeouts DataSafeSetSecurityAssessmentBaselineManagement#timeouts}

---

### DataSafeSetSecurityAssessmentBaselineManagementTimeouts <a name="DataSafeSetSecurityAssessmentBaselineManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.Initializer"></a>

```typescript
import { dataSafeSetSecurityAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeSetSecurityAssessmentBaselineManagementTimeouts: dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#create DataSafeSetSecurityAssessmentBaselineManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#delete DataSafeSetSecurityAssessmentBaselineManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#update DataSafeSetSecurityAssessmentBaselineManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#create DataSafeSetSecurityAssessmentBaselineManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#delete DataSafeSetSecurityAssessmentBaselineManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#update DataSafeSetSecurityAssessmentBaselineManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference <a name="DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeSetSecurityAssessmentBaselineManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts">DataSafeSetSecurityAssessmentBaselineManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeSetSecurityAssessmentBaselineManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts">DataSafeSetSecurityAssessmentBaselineManagementTimeouts</a>

---



