# `dataSafeDatabaseSecurityConfigManagement` Submodule <a name="`dataSafeDatabaseSecurityConfigManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeDatabaseSecurityConfigManagement <a name="DataSafeDatabaseSecurityConfigManagement" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management oci_data_safe_database_security_config_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.Initializer"></a>

```typescript
import { dataSafeDatabaseSecurityConfigManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement(scope: Construct, id: string, config?: DataSafeDatabaseSecurityConfigManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig">DataSafeDatabaseSecurityConfigManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig">DataSafeDatabaseSecurityConfigManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.putSqlFirewallConfig">putSqlFirewallConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetRefreshTrigger">resetRefreshTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetSqlFirewallConfig">resetSqlFirewallConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSqlFirewallConfig` <a name="putSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.putSqlFirewallConfig"></a>

```typescript
public putSqlFirewallConfig(value: DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.putSqlFirewallConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig">DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeDatabaseSecurityConfigManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts">DataSafeDatabaseSecurityConfigManagementTimeouts</a>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRefreshTrigger` <a name="resetRefreshTrigger" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetRefreshTrigger"></a>

```typescript
public resetRefreshTrigger(): void
```

##### `resetSqlFirewallConfig` <a name="resetSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetSqlFirewallConfig"></a>

```typescript
public resetSqlFirewallConfig(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeDatabaseSecurityConfigManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isConstruct"></a>

```typescript
import { dataSafeDatabaseSecurityConfigManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isTerraformElement"></a>

```typescript
import { dataSafeDatabaseSecurityConfigManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isTerraformResource"></a>

```typescript
import { dataSafeDatabaseSecurityConfigManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.generateConfigForImport"></a>

```typescript
import { dataSafeDatabaseSecurityConfigManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeDatabaseSecurityConfigManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeDatabaseSecurityConfigManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeDatabaseSecurityConfigManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeDatabaseSecurityConfigManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.sqlFirewallConfig">sqlFirewallConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference">DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeLastRefreshed">timeLastRefreshed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference">DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.refreshTriggerInput">refreshTriggerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.sqlFirewallConfigInput">sqlFirewallConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig">DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts">DataSafeDatabaseSecurityConfigManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.refreshTrigger">refreshTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `sqlFirewallConfig`<sup>Required</sup> <a name="sqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.sqlFirewallConfig"></a>

```typescript
public readonly sqlFirewallConfig: DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference">DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastRefreshed`<sup>Required</sup> <a name="timeLastRefreshed" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeLastRefreshed"></a>

```typescript
public readonly timeLastRefreshed: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference">DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `refreshTriggerInput`<sup>Optional</sup> <a name="refreshTriggerInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.refreshTriggerInput"></a>

```typescript
public readonly refreshTriggerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sqlFirewallConfigInput`<sup>Optional</sup> <a name="sqlFirewallConfigInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.sqlFirewallConfigInput"></a>

```typescript
public readonly sqlFirewallConfigInput: DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig">DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig</a>

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeDatabaseSecurityConfigManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts">DataSafeDatabaseSecurityConfigManagementTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `refreshTrigger`<sup>Required</sup> <a name="refreshTrigger" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.refreshTrigger"></a>

```typescript
public readonly refreshTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeDatabaseSecurityConfigManagementConfig <a name="DataSafeDatabaseSecurityConfigManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.Initializer"></a>

```typescript
import { dataSafeDatabaseSecurityConfigManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeDatabaseSecurityConfigManagementConfig: dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#compartment_id DataSafeDatabaseSecurityConfigManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#defined_tags DataSafeDatabaseSecurityConfigManagement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#description DataSafeDatabaseSecurityConfigManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#display_name DataSafeDatabaseSecurityConfigManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#freeform_tags DataSafeDatabaseSecurityConfigManagement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#id DataSafeDatabaseSecurityConfigManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.refreshTrigger">refreshTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#refresh_trigger DataSafeDatabaseSecurityConfigManagement#refresh_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.sqlFirewallConfig">sqlFirewallConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig">DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig</a></code> | sql_firewall_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#target_id DataSafeDatabaseSecurityConfigManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts">DataSafeDatabaseSecurityConfigManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#compartment_id DataSafeDatabaseSecurityConfigManagement#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#defined_tags DataSafeDatabaseSecurityConfigManagement#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#description DataSafeDatabaseSecurityConfigManagement#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#display_name DataSafeDatabaseSecurityConfigManagement#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#freeform_tags DataSafeDatabaseSecurityConfigManagement#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#id DataSafeDatabaseSecurityConfigManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshTrigger`<sup>Optional</sup> <a name="refreshTrigger" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.refreshTrigger"></a>

```typescript
public readonly refreshTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#refresh_trigger DataSafeDatabaseSecurityConfigManagement#refresh_trigger}.

---

##### `sqlFirewallConfig`<sup>Optional</sup> <a name="sqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.sqlFirewallConfig"></a>

```typescript
public readonly sqlFirewallConfig: DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig">DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig</a>

sql_firewall_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#sql_firewall_config DataSafeDatabaseSecurityConfigManagement#sql_firewall_config}

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#target_id DataSafeDatabaseSecurityConfigManagement#target_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeDatabaseSecurityConfigManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts">DataSafeDatabaseSecurityConfigManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#timeouts DataSafeDatabaseSecurityConfigManagement#timeouts}

---

### DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig <a name="DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig.Initializer"></a>

```typescript
import { dataSafeDatabaseSecurityConfigManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeDatabaseSecurityConfigManagementSqlFirewallConfig: dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig.property.excludeJob">excludeJob</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#exclude_job DataSafeDatabaseSecurityConfigManagement#exclude_job}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#status DataSafeDatabaseSecurityConfigManagement#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig.property.violationLogAutoPurge">violationLogAutoPurge</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#violation_log_auto_purge DataSafeDatabaseSecurityConfigManagement#violation_log_auto_purge}. |

---

##### `excludeJob`<sup>Optional</sup> <a name="excludeJob" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig.property.excludeJob"></a>

```typescript
public readonly excludeJob: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#exclude_job DataSafeDatabaseSecurityConfigManagement#exclude_job}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#status DataSafeDatabaseSecurityConfigManagement#status}.

---

##### `violationLogAutoPurge`<sup>Optional</sup> <a name="violationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig.property.violationLogAutoPurge"></a>

```typescript
public readonly violationLogAutoPurge: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#violation_log_auto_purge DataSafeDatabaseSecurityConfigManagement#violation_log_auto_purge}.

---

### DataSafeDatabaseSecurityConfigManagementTimeouts <a name="DataSafeDatabaseSecurityConfigManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts.Initializer"></a>

```typescript
import { dataSafeDatabaseSecurityConfigManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeDatabaseSecurityConfigManagementTimeouts: dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#create DataSafeDatabaseSecurityConfigManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#delete DataSafeDatabaseSecurityConfigManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#update DataSafeDatabaseSecurityConfigManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#create DataSafeDatabaseSecurityConfigManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#delete DataSafeDatabaseSecurityConfigManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config_management#update DataSafeDatabaseSecurityConfigManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference <a name="DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.Initializer"></a>

```typescript
import { dataSafeDatabaseSecurityConfigManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.resetExcludeJob">resetExcludeJob</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.resetViolationLogAutoPurge">resetViolationLogAutoPurge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeJob` <a name="resetExcludeJob" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.resetExcludeJob"></a>

```typescript
public resetExcludeJob(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetViolationLogAutoPurge` <a name="resetViolationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.resetViolationLogAutoPurge"></a>

```typescript
public resetViolationLogAutoPurge(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.timeStatusUpdated">timeStatusUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.excludeJobInput">excludeJobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.violationLogAutoPurgeInput">violationLogAutoPurgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.excludeJob">excludeJob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.violationLogAutoPurge">violationLogAutoPurge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig">DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeStatusUpdated`<sup>Required</sup> <a name="timeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.timeStatusUpdated"></a>

```typescript
public readonly timeStatusUpdated: string;
```

- *Type:* string

---

##### `excludeJobInput`<sup>Optional</sup> <a name="excludeJobInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.excludeJobInput"></a>

```typescript
public readonly excludeJobInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `violationLogAutoPurgeInput`<sup>Optional</sup> <a name="violationLogAutoPurgeInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.violationLogAutoPurgeInput"></a>

```typescript
public readonly violationLogAutoPurgeInput: string;
```

- *Type:* string

---

##### `excludeJob`<sup>Required</sup> <a name="excludeJob" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.excludeJob"></a>

```typescript
public readonly excludeJob: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `violationLogAutoPurge`<sup>Required</sup> <a name="violationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.violationLogAutoPurge"></a>

```typescript
public readonly violationLogAutoPurge: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig">DataSafeDatabaseSecurityConfigManagementSqlFirewallConfig</a>

---


### DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference <a name="DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeDatabaseSecurityConfigManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts">DataSafeDatabaseSecurityConfigManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeDatabaseSecurityConfigManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfigManagement.DataSafeDatabaseSecurityConfigManagementTimeouts">DataSafeDatabaseSecurityConfigManagementTimeouts</a>

---



