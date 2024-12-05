# `dataSafeSecurityPolicyDeploymentManagement` Submodule <a name="`dataSafeSecurityPolicyDeploymentManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSecurityPolicyDeploymentManagement <a name="DataSafeSecurityPolicyDeploymentManagement" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management oci_data_safe_security_policy_deployment_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.Initializer"></a>

```typescript
import { dataSafeSecurityPolicyDeploymentManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement(scope: Construct, id: string, config?: DataSafeSecurityPolicyDeploymentManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig">DataSafeSecurityPolicyDeploymentManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig">DataSafeSecurityPolicyDeploymentManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeSecurityPolicyDeploymentManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeouts">DataSafeSecurityPolicyDeploymentManagementTimeouts</a>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSecurityPolicyDeploymentManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.isConstruct"></a>

```typescript
import { dataSafeSecurityPolicyDeploymentManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.isTerraformElement"></a>

```typescript
import { dataSafeSecurityPolicyDeploymentManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.isTerraformResource"></a>

```typescript
import { dataSafeSecurityPolicyDeploymentManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.generateConfigForImport"></a>

```typescript
import { dataSafeSecurityPolicyDeploymentManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeSecurityPolicyDeploymentManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeSecurityPolicyDeploymentManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeSecurityPolicyDeploymentManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSecurityPolicyDeploymentManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.securityPolicyId">securityPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference">DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeouts">DataSafeSecurityPolicyDeploymentManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `securityPolicyId`<sup>Required</sup> <a name="securityPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.securityPolicyId"></a>

```typescript
public readonly securityPolicyId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference">DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeSecurityPolicyDeploymentManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeouts">DataSafeSecurityPolicyDeploymentManagementTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSecurityPolicyDeploymentManagementConfig <a name="DataSafeSecurityPolicyDeploymentManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.Initializer"></a>

```typescript
import { dataSafeSecurityPolicyDeploymentManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeSecurityPolicyDeploymentManagementConfig: dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#compartment_id DataSafeSecurityPolicyDeploymentManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#defined_tags DataSafeSecurityPolicyDeploymentManagement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#description DataSafeSecurityPolicyDeploymentManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#display_name DataSafeSecurityPolicyDeploymentManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#freeform_tags DataSafeSecurityPolicyDeploymentManagement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#id DataSafeSecurityPolicyDeploymentManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#target_id DataSafeSecurityPolicyDeploymentManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeouts">DataSafeSecurityPolicyDeploymentManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#compartment_id DataSafeSecurityPolicyDeploymentManagement#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#defined_tags DataSafeSecurityPolicyDeploymentManagement#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#description DataSafeSecurityPolicyDeploymentManagement#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#display_name DataSafeSecurityPolicyDeploymentManagement#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#freeform_tags DataSafeSecurityPolicyDeploymentManagement#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#id DataSafeSecurityPolicyDeploymentManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#target_id DataSafeSecurityPolicyDeploymentManagement#target_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeSecurityPolicyDeploymentManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeouts">DataSafeSecurityPolicyDeploymentManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#timeouts DataSafeSecurityPolicyDeploymentManagement#timeouts}

---

### DataSafeSecurityPolicyDeploymentManagementTimeouts <a name="DataSafeSecurityPolicyDeploymentManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeouts.Initializer"></a>

```typescript
import { dataSafeSecurityPolicyDeploymentManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeSecurityPolicyDeploymentManagementTimeouts: dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#create DataSafeSecurityPolicyDeploymentManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#delete DataSafeSecurityPolicyDeploymentManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#update DataSafeSecurityPolicyDeploymentManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#create DataSafeSecurityPolicyDeploymentManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#delete DataSafeSecurityPolicyDeploymentManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_policy_deployment_management#update DataSafeSecurityPolicyDeploymentManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference <a name="DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeSecurityPolicyDeploymentManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeouts">DataSafeSecurityPolicyDeploymentManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeSecurityPolicyDeploymentManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityPolicyDeploymentManagement.DataSafeSecurityPolicyDeploymentManagementTimeouts">DataSafeSecurityPolicyDeploymentManagementTimeouts</a>

---



