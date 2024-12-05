# `licenseManagerLicenseRecord` Submodule <a name="`licenseManagerLicenseRecord` Submodule" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicenseManagerLicenseRecord <a name="LicenseManagerLicenseRecord" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record oci_license_manager_license_record}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer"></a>

```typescript
import { licenseManagerLicenseRecord } from 'rhizo-co-terraform-provider-oci'

new licenseManagerLicenseRecord.LicenseManagerLicenseRecord(scope: Construct, id: string, config: LicenseManagerLicenseRecordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig">LicenseManagerLicenseRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig">LicenseManagerLicenseRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetExpirationDate">resetExpirationDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetLicenseCount">resetLicenseCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetProductId">resetProductId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetSupportEndDate">resetSupportEndDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.putTimeouts"></a>

```typescript
public putTimeouts(value: LicenseManagerLicenseRecordTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetExpirationDate` <a name="resetExpirationDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetExpirationDate"></a>

```typescript
public resetExpirationDate(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLicenseCount` <a name="resetLicenseCount" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetLicenseCount"></a>

```typescript
public resetLicenseCount(): void
```

##### `resetProductId` <a name="resetProductId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetProductId"></a>

```typescript
public resetProductId(): void
```

##### `resetSupportEndDate` <a name="resetSupportEndDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetSupportEndDate"></a>

```typescript
public resetSupportEndDate(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LicenseManagerLicenseRecord resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isConstruct"></a>

```typescript
import { licenseManagerLicenseRecord } from 'rhizo-co-terraform-provider-oci'

licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformElement"></a>

```typescript
import { licenseManagerLicenseRecord } from 'rhizo-co-terraform-provider-oci'

licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformResource"></a>

```typescript
import { licenseManagerLicenseRecord } from 'rhizo-co-terraform-provider-oci'

licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport"></a>

```typescript
import { licenseManagerLicenseRecord } from 'rhizo-co-terraform-provider-oci'

licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LicenseManagerLicenseRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LicenseManagerLicenseRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LicenseManagerLicenseRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LicenseManagerLicenseRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseUnit">licenseUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicense">productLicense</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference">LicenseManagerLicenseRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.expirationDateInput">expirationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isPerpetualInput">isPerpetualInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isUnlimitedInput">isUnlimitedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseCountInput">licenseCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productIdInput">productIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicenseIdInput">productLicenseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.supportEndDateInput">supportEndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isPerpetual">isPerpetual</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isUnlimited">isUnlimited</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseCount">licenseCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicenseId">productLicenseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.supportEndDate">supportEndDate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `licenseUnit`<sup>Required</sup> <a name="licenseUnit" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseUnit"></a>

```typescript
public readonly licenseUnit: string;
```

- *Type:* string

---

##### `productLicense`<sup>Required</sup> <a name="productLicense" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicense"></a>

```typescript
public readonly productLicense: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeouts"></a>

```typescript
public readonly timeouts: LicenseManagerLicenseRecordTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference">LicenseManagerLicenseRecordTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `expirationDateInput`<sup>Optional</sup> <a name="expirationDateInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.expirationDateInput"></a>

```typescript
public readonly expirationDateInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isPerpetualInput`<sup>Optional</sup> <a name="isPerpetualInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isPerpetualInput"></a>

```typescript
public readonly isPerpetualInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUnlimitedInput`<sup>Optional</sup> <a name="isUnlimitedInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isUnlimitedInput"></a>

```typescript
public readonly isUnlimitedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseCountInput`<sup>Optional</sup> <a name="licenseCountInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseCountInput"></a>

```typescript
public readonly licenseCountInput: number;
```

- *Type:* number

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productIdInput"></a>

```typescript
public readonly productIdInput: string;
```

- *Type:* string

---

##### `productLicenseIdInput`<sup>Optional</sup> <a name="productLicenseIdInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicenseIdInput"></a>

```typescript
public readonly productLicenseIdInput: string;
```

- *Type:* string

---

##### `supportEndDateInput`<sup>Optional</sup> <a name="supportEndDateInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.supportEndDateInput"></a>

```typescript
public readonly supportEndDateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LicenseManagerLicenseRecordTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isPerpetual`<sup>Required</sup> <a name="isPerpetual" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isPerpetual"></a>

```typescript
public readonly isPerpetual: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUnlimited`<sup>Required</sup> <a name="isUnlimited" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isUnlimited"></a>

```typescript
public readonly isUnlimited: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseCount`<sup>Required</sup> <a name="licenseCount" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseCount"></a>

```typescript
public readonly licenseCount: number;
```

- *Type:* number

---

##### `productId`<sup>Required</sup> <a name="productId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `productLicenseId`<sup>Required</sup> <a name="productLicenseId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicenseId"></a>

```typescript
public readonly productLicenseId: string;
```

- *Type:* string

---

##### `supportEndDate`<sup>Required</sup> <a name="supportEndDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.supportEndDate"></a>

```typescript
public readonly supportEndDate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LicenseManagerLicenseRecordConfig <a name="LicenseManagerLicenseRecordConfig" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.Initializer"></a>

```typescript
import { licenseManagerLicenseRecord } from 'rhizo-co-terraform-provider-oci'

const licenseManagerLicenseRecordConfig: licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#display_name LicenseManagerLicenseRecord#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.isPerpetual">isPerpetual</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_perpetual LicenseManagerLicenseRecord#is_perpetual}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.isUnlimited">isUnlimited</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_unlimited LicenseManagerLicenseRecord#is_unlimited}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.productLicenseId">productLicenseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_license_id LicenseManagerLicenseRecord#product_license_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#defined_tags LicenseManagerLicenseRecord#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.expirationDate">expirationDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#expiration_date LicenseManagerLicenseRecord#expiration_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#freeform_tags LicenseManagerLicenseRecord#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#id LicenseManagerLicenseRecord#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.licenseCount">licenseCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#license_count LicenseManagerLicenseRecord#license_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.productId">productId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_id LicenseManagerLicenseRecord#product_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.supportEndDate">supportEndDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#support_end_date LicenseManagerLicenseRecord#support_end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#display_name LicenseManagerLicenseRecord#display_name}.

---

##### `isPerpetual`<sup>Required</sup> <a name="isPerpetual" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.isPerpetual"></a>

```typescript
public readonly isPerpetual: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_perpetual LicenseManagerLicenseRecord#is_perpetual}.

---

##### `isUnlimited`<sup>Required</sup> <a name="isUnlimited" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.isUnlimited"></a>

```typescript
public readonly isUnlimited: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_unlimited LicenseManagerLicenseRecord#is_unlimited}.

---

##### `productLicenseId`<sup>Required</sup> <a name="productLicenseId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.productLicenseId"></a>

```typescript
public readonly productLicenseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_license_id LicenseManagerLicenseRecord#product_license_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#defined_tags LicenseManagerLicenseRecord#defined_tags}.

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#expiration_date LicenseManagerLicenseRecord#expiration_date}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#freeform_tags LicenseManagerLicenseRecord#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#id LicenseManagerLicenseRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseCount`<sup>Optional</sup> <a name="licenseCount" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.licenseCount"></a>

```typescript
public readonly licenseCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#license_count LicenseManagerLicenseRecord#license_count}.

---

##### `productId`<sup>Optional</sup> <a name="productId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_id LicenseManagerLicenseRecord#product_id}.

---

##### `supportEndDate`<sup>Optional</sup> <a name="supportEndDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.supportEndDate"></a>

```typescript
public readonly supportEndDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#support_end_date LicenseManagerLicenseRecord#support_end_date}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LicenseManagerLicenseRecordTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#timeouts LicenseManagerLicenseRecord#timeouts}

---

### LicenseManagerLicenseRecordTimeouts <a name="LicenseManagerLicenseRecordTimeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.Initializer"></a>

```typescript
import { licenseManagerLicenseRecord } from 'rhizo-co-terraform-provider-oci'

const licenseManagerLicenseRecordTimeouts: licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#create LicenseManagerLicenseRecord#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#delete LicenseManagerLicenseRecord#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#update LicenseManagerLicenseRecord#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#create LicenseManagerLicenseRecord#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#delete LicenseManagerLicenseRecord#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#update LicenseManagerLicenseRecord#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LicenseManagerLicenseRecordTimeoutsOutputReference <a name="LicenseManagerLicenseRecordTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer"></a>

```typescript
import { licenseManagerLicenseRecord } from 'rhizo-co-terraform-provider-oci'

new licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicenseManagerLicenseRecordTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a>

---



