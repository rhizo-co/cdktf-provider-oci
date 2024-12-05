# `dataSafeSqlFirewallPolicyManagement` Submodule <a name="`dataSafeSqlFirewallPolicyManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSqlFirewallPolicyManagement <a name="DataSafeSqlFirewallPolicyManagement" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management oci_data_safe_sql_firewall_policy_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer"></a>

```typescript
import { dataSafeSqlFirewallPolicyManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement(scope: Construct, id: string, config?: DataSafeSqlFirewallPolicyManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig">DataSafeSqlFirewallPolicyManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig">DataSafeSqlFirewallPolicyManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientIps">resetAllowedClientIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientOsUsernames">resetAllowedClientOsUsernames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientPrograms">resetAllowedClientPrograms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDbUserName">resetDbUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetEnforcementScope">resetEnforcementScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetSqlFirewallPolicyId">resetSqlFirewallPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetViolationAction">resetViolationAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetViolationAudit">resetViolationAudit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeSqlFirewallPolicyManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a>

---

##### `resetAllowedClientIps` <a name="resetAllowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientIps"></a>

```typescript
public resetAllowedClientIps(): void
```

##### `resetAllowedClientOsUsernames` <a name="resetAllowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientOsUsernames"></a>

```typescript
public resetAllowedClientOsUsernames(): void
```

##### `resetAllowedClientPrograms` <a name="resetAllowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientPrograms"></a>

```typescript
public resetAllowedClientPrograms(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDbUserName` <a name="resetDbUserName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDbUserName"></a>

```typescript
public resetDbUserName(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnforcementScope` <a name="resetEnforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetEnforcementScope"></a>

```typescript
public resetEnforcementScope(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSqlFirewallPolicyId` <a name="resetSqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetSqlFirewallPolicyId"></a>

```typescript
public resetSqlFirewallPolicyId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetState"></a>

```typescript
public resetState(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetViolationAction` <a name="resetViolationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetViolationAction"></a>

```typescript
public resetViolationAction(): void
```

##### `resetViolationAudit` <a name="resetViolationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetViolationAudit"></a>

```typescript
public resetViolationAudit(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSqlFirewallPolicyManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isConstruct"></a>

```typescript
import { dataSafeSqlFirewallPolicyManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformElement"></a>

```typescript
import { dataSafeSqlFirewallPolicyManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformResource"></a>

```typescript
import { dataSafeSqlFirewallPolicyManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport"></a>

```typescript
import { dataSafeSqlFirewallPolicyManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeSqlFirewallPolicyManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeSqlFirewallPolicyManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeSqlFirewallPolicyManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSqlFirewallPolicyManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.securityPolicyId">securityPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlLevel">sqlLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference">DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientIpsInput">allowedClientIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientOsUsernamesInput">allowedClientOsUsernamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientProgramsInput">allowedClientProgramsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dbUserNameInput">dbUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.enforcementScopeInput">enforcementScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlFirewallPolicyIdInput">sqlFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationActionInput">violationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAuditInput">violationAuditInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientIps">allowedClientIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientOsUsernames">allowedClientOsUsernames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientPrograms">allowedClientPrograms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dbUserName">dbUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.enforcementScope">enforcementScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlFirewallPolicyId">sqlFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAction">violationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAudit">violationAudit</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `securityPolicyId`<sup>Required</sup> <a name="securityPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.securityPolicyId"></a>

```typescript
public readonly securityPolicyId: string;
```

- *Type:* string

---

##### `sqlLevel`<sup>Required</sup> <a name="sqlLevel" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlLevel"></a>

```typescript
public readonly sqlLevel: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference">DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `allowedClientIpsInput`<sup>Optional</sup> <a name="allowedClientIpsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientIpsInput"></a>

```typescript
public readonly allowedClientIpsInput: string[];
```

- *Type:* string[]

---

##### `allowedClientOsUsernamesInput`<sup>Optional</sup> <a name="allowedClientOsUsernamesInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientOsUsernamesInput"></a>

```typescript
public readonly allowedClientOsUsernamesInput: string[];
```

- *Type:* string[]

---

##### `allowedClientProgramsInput`<sup>Optional</sup> <a name="allowedClientProgramsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientProgramsInput"></a>

```typescript
public readonly allowedClientProgramsInput: string[];
```

- *Type:* string[]

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dbUserNameInput`<sup>Optional</sup> <a name="dbUserNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dbUserNameInput"></a>

```typescript
public readonly dbUserNameInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enforcementScopeInput`<sup>Optional</sup> <a name="enforcementScopeInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.enforcementScopeInput"></a>

```typescript
public readonly enforcementScopeInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sqlFirewallPolicyIdInput`<sup>Optional</sup> <a name="sqlFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlFirewallPolicyIdInput"></a>

```typescript
public readonly sqlFirewallPolicyIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeSqlFirewallPolicyManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a>

---

##### `violationActionInput`<sup>Optional</sup> <a name="violationActionInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationActionInput"></a>

```typescript
public readonly violationActionInput: string;
```

- *Type:* string

---

##### `violationAuditInput`<sup>Optional</sup> <a name="violationAuditInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAuditInput"></a>

```typescript
public readonly violationAuditInput: string;
```

- *Type:* string

---

##### `allowedClientIps`<sup>Required</sup> <a name="allowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientIps"></a>

```typescript
public readonly allowedClientIps: string[];
```

- *Type:* string[]

---

##### `allowedClientOsUsernames`<sup>Required</sup> <a name="allowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientOsUsernames"></a>

```typescript
public readonly allowedClientOsUsernames: string[];
```

- *Type:* string[]

---

##### `allowedClientPrograms`<sup>Required</sup> <a name="allowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientPrograms"></a>

```typescript
public readonly allowedClientPrograms: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dbUserName`<sup>Required</sup> <a name="dbUserName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dbUserName"></a>

```typescript
public readonly dbUserName: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enforcementScope`<sup>Required</sup> <a name="enforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.enforcementScope"></a>

```typescript
public readonly enforcementScope: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sqlFirewallPolicyId`<sup>Required</sup> <a name="sqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlFirewallPolicyId"></a>

```typescript
public readonly sqlFirewallPolicyId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `violationAction`<sup>Required</sup> <a name="violationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAction"></a>

```typescript
public readonly violationAction: string;
```

- *Type:* string

---

##### `violationAudit`<sup>Required</sup> <a name="violationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAudit"></a>

```typescript
public readonly violationAudit: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSqlFirewallPolicyManagementConfig <a name="DataSafeSqlFirewallPolicyManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.Initializer"></a>

```typescript
import { dataSafeSqlFirewallPolicyManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeSqlFirewallPolicyManagementConfig: dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientIps">allowedClientIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_ips DataSafeSqlFirewallPolicyManagement#allowed_client_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientOsUsernames">allowedClientOsUsernames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_os_usernames DataSafeSqlFirewallPolicyManagement#allowed_client_os_usernames}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientPrograms">allowedClientPrograms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_programs DataSafeSqlFirewallPolicyManagement#allowed_client_programs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#compartment_id DataSafeSqlFirewallPolicyManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.dbUserName">dbUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#db_user_name DataSafeSqlFirewallPolicyManagement#db_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#defined_tags DataSafeSqlFirewallPolicyManagement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#description DataSafeSqlFirewallPolicyManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#display_name DataSafeSqlFirewallPolicyManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.enforcementScope">enforcementScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#enforcement_scope DataSafeSqlFirewallPolicyManagement#enforcement_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#freeform_tags DataSafeSqlFirewallPolicyManagement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#id DataSafeSqlFirewallPolicyManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.sqlFirewallPolicyId">sqlFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#sql_firewall_policy_id DataSafeSqlFirewallPolicyManagement#sql_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#state DataSafeSqlFirewallPolicyManagement#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#status DataSafeSqlFirewallPolicyManagement#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#target_id DataSafeSqlFirewallPolicyManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.violationAction">violationAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_action DataSafeSqlFirewallPolicyManagement#violation_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.violationAudit">violationAudit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_audit DataSafeSqlFirewallPolicyManagement#violation_audit}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedClientIps`<sup>Optional</sup> <a name="allowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientIps"></a>

```typescript
public readonly allowedClientIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_ips DataSafeSqlFirewallPolicyManagement#allowed_client_ips}.

---

##### `allowedClientOsUsernames`<sup>Optional</sup> <a name="allowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientOsUsernames"></a>

```typescript
public readonly allowedClientOsUsernames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_os_usernames DataSafeSqlFirewallPolicyManagement#allowed_client_os_usernames}.

---

##### `allowedClientPrograms`<sup>Optional</sup> <a name="allowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientPrograms"></a>

```typescript
public readonly allowedClientPrograms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_programs DataSafeSqlFirewallPolicyManagement#allowed_client_programs}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#compartment_id DataSafeSqlFirewallPolicyManagement#compartment_id}.

---

##### `dbUserName`<sup>Optional</sup> <a name="dbUserName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.dbUserName"></a>

```typescript
public readonly dbUserName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#db_user_name DataSafeSqlFirewallPolicyManagement#db_user_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#defined_tags DataSafeSqlFirewallPolicyManagement#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#description DataSafeSqlFirewallPolicyManagement#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#display_name DataSafeSqlFirewallPolicyManagement#display_name}.

---

##### `enforcementScope`<sup>Optional</sup> <a name="enforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.enforcementScope"></a>

```typescript
public readonly enforcementScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#enforcement_scope DataSafeSqlFirewallPolicyManagement#enforcement_scope}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#freeform_tags DataSafeSqlFirewallPolicyManagement#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#id DataSafeSqlFirewallPolicyManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sqlFirewallPolicyId`<sup>Optional</sup> <a name="sqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.sqlFirewallPolicyId"></a>

```typescript
public readonly sqlFirewallPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#sql_firewall_policy_id DataSafeSqlFirewallPolicyManagement#sql_firewall_policy_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#state DataSafeSqlFirewallPolicyManagement#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#status DataSafeSqlFirewallPolicyManagement#status}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#target_id DataSafeSqlFirewallPolicyManagement#target_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeSqlFirewallPolicyManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#timeouts DataSafeSqlFirewallPolicyManagement#timeouts}

---

##### `violationAction`<sup>Optional</sup> <a name="violationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.violationAction"></a>

```typescript
public readonly violationAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_action DataSafeSqlFirewallPolicyManagement#violation_action}.

---

##### `violationAudit`<sup>Optional</sup> <a name="violationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.violationAudit"></a>

```typescript
public readonly violationAudit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_audit DataSafeSqlFirewallPolicyManagement#violation_audit}.

---

### DataSafeSqlFirewallPolicyManagementTimeouts <a name="DataSafeSqlFirewallPolicyManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.Initializer"></a>

```typescript
import { dataSafeSqlFirewallPolicyManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeSqlFirewallPolicyManagementTimeouts: dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#create DataSafeSqlFirewallPolicyManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#delete DataSafeSqlFirewallPolicyManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#update DataSafeSqlFirewallPolicyManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#create DataSafeSqlFirewallPolicyManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#delete DataSafeSqlFirewallPolicyManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#update DataSafeSqlFirewallPolicyManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference <a name="DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeSqlFirewallPolicyManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeSqlFirewallPolicyManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a>

---



