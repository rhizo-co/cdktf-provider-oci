# `dataSafeAuditPolicyManagement` Submodule <a name="`dataSafeAuditPolicyManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeAuditPolicyManagement <a name="DataSafeAuditPolicyManagement" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management oci_data_safe_audit_policy_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.Initializer"></a>

```typescript
import { dataSafeAuditPolicyManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement(scope: Construct, id: string, config?: DataSafeAuditPolicyManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig">DataSafeAuditPolicyManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig">DataSafeAuditPolicyManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.putAuditConditions">putAuditConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetAuditConditions">resetAuditConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetIsDataSafeServiceAccountExcluded">resetIsDataSafeServiceAccountExcluded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetProvisionTrigger">resetProvisionTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetRetrieveFromTargetTrigger">resetRetrieveFromTargetTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuditConditions` <a name="putAuditConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.putAuditConditions"></a>

```typescript
public putAuditConditions(value: IResolvable | DataSafeAuditPolicyManagementAuditConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.putAuditConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions">DataSafeAuditPolicyManagementAuditConditions</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeAuditPolicyManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts">DataSafeAuditPolicyManagementTimeouts</a>

---

##### `resetAuditConditions` <a name="resetAuditConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetAuditConditions"></a>

```typescript
public resetAuditConditions(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsDataSafeServiceAccountExcluded` <a name="resetIsDataSafeServiceAccountExcluded" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetIsDataSafeServiceAccountExcluded"></a>

```typescript
public resetIsDataSafeServiceAccountExcluded(): void
```

##### `resetProvisionTrigger` <a name="resetProvisionTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetProvisionTrigger"></a>

```typescript
public resetProvisionTrigger(): void
```

##### `resetRetrieveFromTargetTrigger` <a name="resetRetrieveFromTargetTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetRetrieveFromTargetTrigger"></a>

```typescript
public resetRetrieveFromTargetTrigger(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeAuditPolicyManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isConstruct"></a>

```typescript
import { dataSafeAuditPolicyManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isTerraformElement"></a>

```typescript
import { dataSafeAuditPolicyManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isTerraformResource"></a>

```typescript
import { dataSafeAuditPolicyManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.generateConfigForImport"></a>

```typescript
import { dataSafeAuditPolicyManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeAuditPolicyManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeAuditPolicyManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeAuditPolicyManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeAuditPolicyManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.auditConditions">auditConditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList">DataSafeAuditPolicyManagementAuditConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.auditSpecifications">auditSpecifications</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList">DataSafeAuditPolicyManagementAuditSpecificationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeLastProvisioned">timeLastProvisioned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeLastRetrieved">timeLastRetrieved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference">DataSafeAuditPolicyManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.auditConditionsInput">auditConditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions">DataSafeAuditPolicyManagementAuditConditions</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.isDataSafeServiceAccountExcludedInput">isDataSafeServiceAccountExcludedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.provisionTriggerInput">provisionTriggerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.retrieveFromTargetTriggerInput">retrieveFromTargetTriggerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts">DataSafeAuditPolicyManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.isDataSafeServiceAccountExcluded">isDataSafeServiceAccountExcluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.provisionTrigger">provisionTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.retrieveFromTargetTrigger">retrieveFromTargetTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auditConditions`<sup>Required</sup> <a name="auditConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.auditConditions"></a>

```typescript
public readonly auditConditions: DataSafeAuditPolicyManagementAuditConditionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList">DataSafeAuditPolicyManagementAuditConditionsList</a>

---

##### `auditSpecifications`<sup>Required</sup> <a name="auditSpecifications" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.auditSpecifications"></a>

```typescript
public readonly auditSpecifications: DataSafeAuditPolicyManagementAuditSpecificationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList">DataSafeAuditPolicyManagementAuditSpecificationsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastProvisioned`<sup>Required</sup> <a name="timeLastProvisioned" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeLastProvisioned"></a>

```typescript
public readonly timeLastProvisioned: string;
```

- *Type:* string

---

##### `timeLastRetrieved`<sup>Required</sup> <a name="timeLastRetrieved" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeLastRetrieved"></a>

```typescript
public readonly timeLastRetrieved: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeAuditPolicyManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference">DataSafeAuditPolicyManagementTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `auditConditionsInput`<sup>Optional</sup> <a name="auditConditionsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.auditConditionsInput"></a>

```typescript
public readonly auditConditionsInput: IResolvable | DataSafeAuditPolicyManagementAuditConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions">DataSafeAuditPolicyManagementAuditConditions</a>[]

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isDataSafeServiceAccountExcludedInput`<sup>Optional</sup> <a name="isDataSafeServiceAccountExcludedInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.isDataSafeServiceAccountExcludedInput"></a>

```typescript
public readonly isDataSafeServiceAccountExcludedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `provisionTriggerInput`<sup>Optional</sup> <a name="provisionTriggerInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.provisionTriggerInput"></a>

```typescript
public readonly provisionTriggerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retrieveFromTargetTriggerInput`<sup>Optional</sup> <a name="retrieveFromTargetTriggerInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.retrieveFromTargetTriggerInput"></a>

```typescript
public readonly retrieveFromTargetTriggerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeAuditPolicyManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts">DataSafeAuditPolicyManagementTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDataSafeServiceAccountExcluded`<sup>Required</sup> <a name="isDataSafeServiceAccountExcluded" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.isDataSafeServiceAccountExcluded"></a>

```typescript
public readonly isDataSafeServiceAccountExcluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `provisionTrigger`<sup>Required</sup> <a name="provisionTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.provisionTrigger"></a>

```typescript
public readonly provisionTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retrieveFromTargetTrigger`<sup>Required</sup> <a name="retrieveFromTargetTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.retrieveFromTargetTrigger"></a>

```typescript
public readonly retrieveFromTargetTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeAuditPolicyManagementAuditConditions <a name="DataSafeAuditPolicyManagementAuditConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.Initializer"></a>

```typescript
import { dataSafeAuditPolicyManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeAuditPolicyManagementAuditConditions: dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.auditPolicyName">auditPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#audit_policy_name DataSafeAuditPolicyManagement#audit_policy_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.enableConditions">enableConditions</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions">DataSafeAuditPolicyManagementAuditConditionsEnableConditions</a>[]</code> | enable_conditions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.isDataSafeServiceAccountAudited">isDataSafeServiceAccountAudited</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#is_data_safe_service_account_audited DataSafeAuditPolicyManagement#is_data_safe_service_account_audited}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#is_enabled DataSafeAuditPolicyManagement#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.isPrivUsersManagedByDataSafe">isPrivUsersManagedByDataSafe</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#is_priv_users_managed_by_data_safe DataSafeAuditPolicyManagement#is_priv_users_managed_by_data_safe}. |

---

##### `auditPolicyName`<sup>Optional</sup> <a name="auditPolicyName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.auditPolicyName"></a>

```typescript
public readonly auditPolicyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#audit_policy_name DataSafeAuditPolicyManagement#audit_policy_name}.

---

##### `enableConditions`<sup>Optional</sup> <a name="enableConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.enableConditions"></a>

```typescript
public readonly enableConditions: IResolvable | DataSafeAuditPolicyManagementAuditConditionsEnableConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions">DataSafeAuditPolicyManagementAuditConditionsEnableConditions</a>[]

enable_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#enable_conditions DataSafeAuditPolicyManagement#enable_conditions}

---

##### `isDataSafeServiceAccountAudited`<sup>Optional</sup> <a name="isDataSafeServiceAccountAudited" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.isDataSafeServiceAccountAudited"></a>

```typescript
public readonly isDataSafeServiceAccountAudited: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#is_data_safe_service_account_audited DataSafeAuditPolicyManagement#is_data_safe_service_account_audited}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#is_enabled DataSafeAuditPolicyManagement#is_enabled}.

---

##### `isPrivUsersManagedByDataSafe`<sup>Optional</sup> <a name="isPrivUsersManagedByDataSafe" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions.property.isPrivUsersManagedByDataSafe"></a>

```typescript
public readonly isPrivUsersManagedByDataSafe: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#is_priv_users_managed_by_data_safe DataSafeAuditPolicyManagement#is_priv_users_managed_by_data_safe}.

---

### DataSafeAuditPolicyManagementAuditConditionsEnableConditions <a name="DataSafeAuditPolicyManagementAuditConditionsEnableConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions.Initializer"></a>

```typescript
import { dataSafeAuditPolicyManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeAuditPolicyManagementAuditConditionsEnableConditions: dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions.property.entityNames">entityNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#entity_names DataSafeAuditPolicyManagement#entity_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions.property.entitySelection">entitySelection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#entity_selection DataSafeAuditPolicyManagement#entity_selection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions.property.entityType">entityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#entity_type DataSafeAuditPolicyManagement#entity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions.property.operationStatus">operationStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#operation_status DataSafeAuditPolicyManagement#operation_status}. |

---

##### `entityNames`<sup>Optional</sup> <a name="entityNames" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions.property.entityNames"></a>

```typescript
public readonly entityNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#entity_names DataSafeAuditPolicyManagement#entity_names}.

---

##### `entitySelection`<sup>Optional</sup> <a name="entitySelection" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions.property.entitySelection"></a>

```typescript
public readonly entitySelection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#entity_selection DataSafeAuditPolicyManagement#entity_selection}.

---

##### `entityType`<sup>Optional</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#entity_type DataSafeAuditPolicyManagement#entity_type}.

---

##### `operationStatus`<sup>Optional</sup> <a name="operationStatus" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions.property.operationStatus"></a>

```typescript
public readonly operationStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#operation_status DataSafeAuditPolicyManagement#operation_status}.

---

### DataSafeAuditPolicyManagementAuditSpecifications <a name="DataSafeAuditPolicyManagementAuditSpecifications" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecifications"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecifications.Initializer"></a>

```typescript
import { dataSafeAuditPolicyManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeAuditPolicyManagementAuditSpecifications: dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecifications = { ... }
```


### DataSafeAuditPolicyManagementConfig <a name="DataSafeAuditPolicyManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.Initializer"></a>

```typescript
import { dataSafeAuditPolicyManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeAuditPolicyManagementConfig: dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.auditConditions">auditConditions</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions">DataSafeAuditPolicyManagementAuditConditions</a>[]</code> | audit_conditions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#compartment_id DataSafeAuditPolicyManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#defined_tags DataSafeAuditPolicyManagement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#description DataSafeAuditPolicyManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#display_name DataSafeAuditPolicyManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#freeform_tags DataSafeAuditPolicyManagement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#id DataSafeAuditPolicyManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.isDataSafeServiceAccountExcluded">isDataSafeServiceAccountExcluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#is_data_safe_service_account_excluded DataSafeAuditPolicyManagement#is_data_safe_service_account_excluded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.provisionTrigger">provisionTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#provision_trigger DataSafeAuditPolicyManagement#provision_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.retrieveFromTargetTrigger">retrieveFromTargetTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#retrieve_from_target_trigger DataSafeAuditPolicyManagement#retrieve_from_target_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#target_id DataSafeAuditPolicyManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts">DataSafeAuditPolicyManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auditConditions`<sup>Optional</sup> <a name="auditConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.auditConditions"></a>

```typescript
public readonly auditConditions: IResolvable | DataSafeAuditPolicyManagementAuditConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions">DataSafeAuditPolicyManagementAuditConditions</a>[]

audit_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#audit_conditions DataSafeAuditPolicyManagement#audit_conditions}

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#compartment_id DataSafeAuditPolicyManagement#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#defined_tags DataSafeAuditPolicyManagement#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#description DataSafeAuditPolicyManagement#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#display_name DataSafeAuditPolicyManagement#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#freeform_tags DataSafeAuditPolicyManagement#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#id DataSafeAuditPolicyManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDataSafeServiceAccountExcluded`<sup>Optional</sup> <a name="isDataSafeServiceAccountExcluded" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.isDataSafeServiceAccountExcluded"></a>

```typescript
public readonly isDataSafeServiceAccountExcluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#is_data_safe_service_account_excluded DataSafeAuditPolicyManagement#is_data_safe_service_account_excluded}.

---

##### `provisionTrigger`<sup>Optional</sup> <a name="provisionTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.provisionTrigger"></a>

```typescript
public readonly provisionTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#provision_trigger DataSafeAuditPolicyManagement#provision_trigger}.

---

##### `retrieveFromTargetTrigger`<sup>Optional</sup> <a name="retrieveFromTargetTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.retrieveFromTargetTrigger"></a>

```typescript
public readonly retrieveFromTargetTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#retrieve_from_target_trigger DataSafeAuditPolicyManagement#retrieve_from_target_trigger}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#target_id DataSafeAuditPolicyManagement#target_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeAuditPolicyManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts">DataSafeAuditPolicyManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#timeouts DataSafeAuditPolicyManagement#timeouts}

---

### DataSafeAuditPolicyManagementTimeouts <a name="DataSafeAuditPolicyManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts.Initializer"></a>

```typescript
import { dataSafeAuditPolicyManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeAuditPolicyManagementTimeouts: dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#create DataSafeAuditPolicyManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#delete DataSafeAuditPolicyManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#update DataSafeAuditPolicyManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#create DataSafeAuditPolicyManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#delete DataSafeAuditPolicyManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy_management#update DataSafeAuditPolicyManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList <a name="DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.Initializer"></a>

```typescript
import { dataSafeAuditPolicyManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.get"></a>

```typescript
public get(index: number): DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions">DataSafeAuditPolicyManagementAuditConditionsEnableConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeAuditPolicyManagementAuditConditionsEnableConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions">DataSafeAuditPolicyManagementAuditConditionsEnableConditions</a>[]

---


### DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference <a name="DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.Initializer"></a>

```typescript
import { dataSafeAuditPolicyManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resetEntityNames">resetEntityNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resetEntitySelection">resetEntitySelection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resetEntityType">resetEntityType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resetOperationStatus">resetOperationStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntityNames` <a name="resetEntityNames" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resetEntityNames"></a>

```typescript
public resetEntityNames(): void
```

##### `resetEntitySelection` <a name="resetEntitySelection" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resetEntitySelection"></a>

```typescript
public resetEntitySelection(): void
```

##### `resetEntityType` <a name="resetEntityType" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resetEntityType"></a>

```typescript
public resetEntityType(): void
```

##### `resetOperationStatus` <a name="resetOperationStatus" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.resetOperationStatus"></a>

```typescript
public resetOperationStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entityNamesInput">entityNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entitySelectionInput">entitySelectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entityTypeInput">entityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.operationStatusInput">operationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entityNames">entityNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entitySelection">entitySelection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.operationStatus">operationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions">DataSafeAuditPolicyManagementAuditConditionsEnableConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityNamesInput`<sup>Optional</sup> <a name="entityNamesInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entityNamesInput"></a>

```typescript
public readonly entityNamesInput: string[];
```

- *Type:* string[]

---

##### `entitySelectionInput`<sup>Optional</sup> <a name="entitySelectionInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entitySelectionInput"></a>

```typescript
public readonly entitySelectionInput: string;
```

- *Type:* string

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entityTypeInput"></a>

```typescript
public readonly entityTypeInput: string;
```

- *Type:* string

---

##### `operationStatusInput`<sup>Optional</sup> <a name="operationStatusInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.operationStatusInput"></a>

```typescript
public readonly operationStatusInput: string;
```

- *Type:* string

---

##### `entityNames`<sup>Required</sup> <a name="entityNames" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entityNames"></a>

```typescript
public readonly entityNames: string[];
```

- *Type:* string[]

---

##### `entitySelection`<sup>Required</sup> <a name="entitySelection" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entitySelection"></a>

```typescript
public readonly entitySelection: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `operationStatus`<sup>Required</sup> <a name="operationStatus" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.operationStatus"></a>

```typescript
public readonly operationStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeAuditPolicyManagementAuditConditionsEnableConditions;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions">DataSafeAuditPolicyManagementAuditConditionsEnableConditions</a>

---


### DataSafeAuditPolicyManagementAuditConditionsList <a name="DataSafeAuditPolicyManagementAuditConditionsList" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.Initializer"></a>

```typescript
import { dataSafeAuditPolicyManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.get"></a>

```typescript
public get(index: number): DataSafeAuditPolicyManagementAuditConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions">DataSafeAuditPolicyManagementAuditConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeAuditPolicyManagementAuditConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions">DataSafeAuditPolicyManagementAuditConditions</a>[]

---


### DataSafeAuditPolicyManagementAuditConditionsOutputReference <a name="DataSafeAuditPolicyManagementAuditConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.Initializer"></a>

```typescript
import { dataSafeAuditPolicyManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.putEnableConditions">putEnableConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetAuditPolicyName">resetAuditPolicyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetEnableConditions">resetEnableConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetIsDataSafeServiceAccountAudited">resetIsDataSafeServiceAccountAudited</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetIsPrivUsersManagedByDataSafe">resetIsPrivUsersManagedByDataSafe</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnableConditions` <a name="putEnableConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.putEnableConditions"></a>

```typescript
public putEnableConditions(value: IResolvable | DataSafeAuditPolicyManagementAuditConditionsEnableConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.putEnableConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions">DataSafeAuditPolicyManagementAuditConditionsEnableConditions</a>[]

---

##### `resetAuditPolicyName` <a name="resetAuditPolicyName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetAuditPolicyName"></a>

```typescript
public resetAuditPolicyName(): void
```

##### `resetEnableConditions` <a name="resetEnableConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetEnableConditions"></a>

```typescript
public resetEnableConditions(): void
```

##### `resetIsDataSafeServiceAccountAudited` <a name="resetIsDataSafeServiceAccountAudited" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetIsDataSafeServiceAccountAudited"></a>

```typescript
public resetIsDataSafeServiceAccountAudited(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetIsPrivUsersManagedByDataSafe` <a name="resetIsPrivUsersManagedByDataSafe" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.resetIsPrivUsersManagedByDataSafe"></a>

```typescript
public resetIsPrivUsersManagedByDataSafe(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.enableConditions">enableConditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList">DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.auditPolicyNameInput">auditPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.enableConditionsInput">enableConditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions">DataSafeAuditPolicyManagementAuditConditionsEnableConditions</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isDataSafeServiceAccountAuditedInput">isDataSafeServiceAccountAuditedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isPrivUsersManagedByDataSafeInput">isPrivUsersManagedByDataSafeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.auditPolicyName">auditPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isDataSafeServiceAccountAudited">isDataSafeServiceAccountAudited</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isPrivUsersManagedByDataSafe">isPrivUsersManagedByDataSafe</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions">DataSafeAuditPolicyManagementAuditConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableConditions`<sup>Required</sup> <a name="enableConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.enableConditions"></a>

```typescript
public readonly enableConditions: DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList">DataSafeAuditPolicyManagementAuditConditionsEnableConditionsList</a>

---

##### `auditPolicyNameInput`<sup>Optional</sup> <a name="auditPolicyNameInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.auditPolicyNameInput"></a>

```typescript
public readonly auditPolicyNameInput: string;
```

- *Type:* string

---

##### `enableConditionsInput`<sup>Optional</sup> <a name="enableConditionsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.enableConditionsInput"></a>

```typescript
public readonly enableConditionsInput: IResolvable | DataSafeAuditPolicyManagementAuditConditionsEnableConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsEnableConditions">DataSafeAuditPolicyManagementAuditConditionsEnableConditions</a>[]

---

##### `isDataSafeServiceAccountAuditedInput`<sup>Optional</sup> <a name="isDataSafeServiceAccountAuditedInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isDataSafeServiceAccountAuditedInput"></a>

```typescript
public readonly isDataSafeServiceAccountAuditedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPrivUsersManagedByDataSafeInput`<sup>Optional</sup> <a name="isPrivUsersManagedByDataSafeInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isPrivUsersManagedByDataSafeInput"></a>

```typescript
public readonly isPrivUsersManagedByDataSafeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `auditPolicyName`<sup>Required</sup> <a name="auditPolicyName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.auditPolicyName"></a>

```typescript
public readonly auditPolicyName: string;
```

- *Type:* string

---

##### `isDataSafeServiceAccountAudited`<sup>Required</sup> <a name="isDataSafeServiceAccountAudited" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isDataSafeServiceAccountAudited"></a>

```typescript
public readonly isDataSafeServiceAccountAudited: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPrivUsersManagedByDataSafe`<sup>Required</sup> <a name="isPrivUsersManagedByDataSafe" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.isPrivUsersManagedByDataSafe"></a>

```typescript
public readonly isPrivUsersManagedByDataSafe: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeAuditPolicyManagementAuditConditions;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditConditions">DataSafeAuditPolicyManagementAuditConditions</a>

---


### DataSafeAuditPolicyManagementAuditSpecificationsList <a name="DataSafeAuditPolicyManagementAuditSpecificationsList" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.Initializer"></a>

```typescript
import { dataSafeAuditPolicyManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.get"></a>

```typescript
public get(index: number): DataSafeAuditPolicyManagementAuditSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSafeAuditPolicyManagementAuditSpecificationsOutputReference <a name="DataSafeAuditPolicyManagementAuditSpecificationsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.Initializer"></a>

```typescript
import { dataSafeAuditPolicyManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.auditPolicyCategory">auditPolicyCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.auditPolicyName">auditPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.databasePolicyNames">databasePolicyNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.enabledEntities">enabledEntities</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.enableStatus">enableStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isCreated">isCreated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isEnabledForAllUsers">isEnabledForAllUsers</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isSeededInDataSafe">isSeededInDataSafe</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isSeededInTarget">isSeededInTarget</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isViewOnly">isViewOnly</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.partiallyEnabledMsg">partiallyEnabledMsg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecifications">DataSafeAuditPolicyManagementAuditSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditPolicyCategory`<sup>Required</sup> <a name="auditPolicyCategory" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.auditPolicyCategory"></a>

```typescript
public readonly auditPolicyCategory: string;
```

- *Type:* string

---

##### `auditPolicyName`<sup>Required</sup> <a name="auditPolicyName" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.auditPolicyName"></a>

```typescript
public readonly auditPolicyName: string;
```

- *Type:* string

---

##### `databasePolicyNames`<sup>Required</sup> <a name="databasePolicyNames" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.databasePolicyNames"></a>

```typescript
public readonly databasePolicyNames: string[];
```

- *Type:* string[]

---

##### `enabledEntities`<sup>Required</sup> <a name="enabledEntities" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.enabledEntities"></a>

```typescript
public readonly enabledEntities: string;
```

- *Type:* string

---

##### `enableStatus`<sup>Required</sup> <a name="enableStatus" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.enableStatus"></a>

```typescript
public readonly enableStatus: string;
```

- *Type:* string

---

##### `isCreated`<sup>Required</sup> <a name="isCreated" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isCreated"></a>

```typescript
public readonly isCreated: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isEnabledForAllUsers`<sup>Required</sup> <a name="isEnabledForAllUsers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isEnabledForAllUsers"></a>

```typescript
public readonly isEnabledForAllUsers: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSeededInDataSafe`<sup>Required</sup> <a name="isSeededInDataSafe" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isSeededInDataSafe"></a>

```typescript
public readonly isSeededInDataSafe: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSeededInTarget`<sup>Required</sup> <a name="isSeededInTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isSeededInTarget"></a>

```typescript
public readonly isSeededInTarget: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isViewOnly`<sup>Required</sup> <a name="isViewOnly" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.isViewOnly"></a>

```typescript
public readonly isViewOnly: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `partiallyEnabledMsg`<sup>Required</sup> <a name="partiallyEnabledMsg" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.partiallyEnabledMsg"></a>

```typescript
public readonly partiallyEnabledMsg: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSafeAuditPolicyManagementAuditSpecifications;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementAuditSpecifications">DataSafeAuditPolicyManagementAuditSpecifications</a>

---


### DataSafeAuditPolicyManagementTimeoutsOutputReference <a name="DataSafeAuditPolicyManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeAuditPolicyManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts">DataSafeAuditPolicyManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeAuditPolicyManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicyManagement.DataSafeAuditPolicyManagementTimeouts">DataSafeAuditPolicyManagementTimeouts</a>

---



