# `mysqlMysqlDbSystem` Submodule <a name="`mysqlMysqlDbSystem` Submodule" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlMysqlDbSystem <a name="MysqlMysqlDbSystem" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system oci_mysql_mysql_db_system}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystem(scope: Construct, id: string, config: MysqlMysqlDbSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig">MysqlMysqlDbSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig">MysqlMysqlDbSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putBackupPolicy">putBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putCustomerContacts">putCustomerContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDataStorage">putDataStorage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDeletionPolicy">putDeletionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putMaintenance">putMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSecureConnections">putSecureConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSource">putSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetAdminUsername">resetAdminUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetBackupPolicy">resetBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetConfigurationId">resetConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetCrashRecovery">resetCrashRecovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetCustomerContacts">resetCustomerContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDatabaseManagement">resetDatabaseManagement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDataStorage">resetDataStorage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDataStorageSizeInGb">resetDataStorageSizeInGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetFaultDomain">resetFaultDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetHostnameLabel">resetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetIsHighlyAvailable">resetIsHighlyAvailable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetMaintenance">resetMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetMysqlVersion">resetMysqlVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetPortX">resetPortX</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetSecureConnections">resetSecureConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetShutdownType">resetShutdownType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupPolicy` <a name="putBackupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putBackupPolicy"></a>

```typescript
public putBackupPolicy(value: MysqlMysqlDbSystemBackupPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putBackupPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a>

---

##### `putCustomerContacts` <a name="putCustomerContacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putCustomerContacts"></a>

```typescript
public putCustomerContacts(value: IResolvable | MysqlMysqlDbSystemCustomerContacts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putCustomerContacts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>[]

---

##### `putDataStorage` <a name="putDataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDataStorage"></a>

```typescript
public putDataStorage(value: MysqlMysqlDbSystemDataStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDataStorage.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a>

---

##### `putDeletionPolicy` <a name="putDeletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDeletionPolicy"></a>

```typescript
public putDeletionPolicy(value: IResolvable | MysqlMysqlDbSystemDeletionPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putDeletionPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>[]

---

##### `putMaintenance` <a name="putMaintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putMaintenance"></a>

```typescript
public putMaintenance(value: MysqlMysqlDbSystemMaintenance): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putMaintenance.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a>

---

##### `putSecureConnections` <a name="putSecureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSecureConnections"></a>

```typescript
public putSecureConnections(value: MysqlMysqlDbSystemSecureConnections): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSecureConnections.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a>

---

##### `putSource` <a name="putSource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSource"></a>

```typescript
public putSource(value: MysqlMysqlDbSystemSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putTimeouts"></a>

```typescript
public putTimeouts(value: MysqlMysqlDbSystemTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a>

---

##### `resetAdminPassword` <a name="resetAdminPassword" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetAdminPassword"></a>

```typescript
public resetAdminPassword(): void
```

##### `resetAdminUsername` <a name="resetAdminUsername" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetAdminUsername"></a>

```typescript
public resetAdminUsername(): void
```

##### `resetBackupPolicy` <a name="resetBackupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetBackupPolicy"></a>

```typescript
public resetBackupPolicy(): void
```

##### `resetConfigurationId` <a name="resetConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetConfigurationId"></a>

```typescript
public resetConfigurationId(): void
```

##### `resetCrashRecovery` <a name="resetCrashRecovery" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetCrashRecovery"></a>

```typescript
public resetCrashRecovery(): void
```

##### `resetCustomerContacts` <a name="resetCustomerContacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetCustomerContacts"></a>

```typescript
public resetCustomerContacts(): void
```

##### `resetDatabaseManagement` <a name="resetDatabaseManagement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDatabaseManagement"></a>

```typescript
public resetDatabaseManagement(): void
```

##### `resetDataStorage` <a name="resetDataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDataStorage"></a>

```typescript
public resetDataStorage(): void
```

##### `resetDataStorageSizeInGb` <a name="resetDataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDataStorageSizeInGb"></a>

```typescript
public resetDataStorageSizeInGb(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFaultDomain` <a name="resetFaultDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetFaultDomain"></a>

```typescript
public resetFaultDomain(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetHostnameLabel` <a name="resetHostnameLabel" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetHostnameLabel"></a>

```typescript
public resetHostnameLabel(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetIsHighlyAvailable` <a name="resetIsHighlyAvailable" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetIsHighlyAvailable"></a>

```typescript
public resetIsHighlyAvailable(): void
```

##### `resetMaintenance` <a name="resetMaintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetMaintenance"></a>

```typescript
public resetMaintenance(): void
```

##### `resetMysqlVersion` <a name="resetMysqlVersion" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetMysqlVersion"></a>

```typescript
public resetMysqlVersion(): void
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortX` <a name="resetPortX" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetPortX"></a>

```typescript
public resetPortX(): void
```

##### `resetSecureConnections` <a name="resetSecureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetSecureConnections"></a>

```typescript
public resetSecureConnections(): void
```

##### `resetShutdownType` <a name="resetShutdownType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetShutdownType"></a>

```typescript
public resetShutdownType(): void
```

##### `resetSource` <a name="resetSource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MysqlMysqlDbSystem resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isConstruct"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

mysqlMysqlDbSystem.MysqlMysqlDbSystem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformElement"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformResource"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MysqlMysqlDbSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MysqlMysqlDbSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MysqlMysqlDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MysqlMysqlDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.backupPolicy">backupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference">MysqlMysqlDbSystemBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.channels">channels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList">MysqlMysqlDbSystemChannelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.currentPlacement">currentPlacement</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList">MysqlMysqlDbSystemCurrentPlacementList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.customerContacts">customerContacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList">MysqlMysqlDbSystemCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorage">dataStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference">MysqlMysqlDbSystemDataStorageOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.deletionPolicy">deletionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList">MysqlMysqlDbSystemDeletionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.endpoints">endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList">MysqlMysqlDbSystemEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.heatWaveCluster">heatWaveCluster</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList">MysqlMysqlDbSystemHeatWaveClusterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHeatWaveClusterAttached">isHeatWaveClusterAttached</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.maintenance">maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference">MysqlMysqlDbSystemMaintenanceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.pointInTimeRecoveryDetails">pointInTimeRecoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList">MysqlMysqlDbSystemPointInTimeRecoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.secureConnections">secureConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference">MysqlMysqlDbSystemSecureConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference">MysqlMysqlDbSystemSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference">MysqlMysqlDbSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminPasswordInput">adminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminUsernameInput">adminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.backupPolicyInput">backupPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.configurationIdInput">configurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.crashRecoveryInput">crashRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.customerContactsInput">customerContactsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.databaseManagementInput">databaseManagementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageInput">dataStorageInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageSizeInGbInput">dataStorageSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.faultDomainInput">faultDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.hostnameLabelInput">hostnameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHighlyAvailableInput">isHighlyAvailableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.maintenanceInput">maintenanceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.mysqlVersionInput">mysqlVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portXInput">portXInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.secureConnectionsInput">secureConnectionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shapeNameInput">shapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shutdownTypeInput">shutdownTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.sourceInput">sourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.configurationId">configurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.crashRecovery">crashRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.databaseManagement">databaseManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.hostnameLabel">hostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHighlyAvailable">isHighlyAvailable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.mysqlVersion">mysqlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portX">portX</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shutdownType">shutdownType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupPolicy`<sup>Required</sup> <a name="backupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.backupPolicy"></a>

```typescript
public readonly backupPolicy: MysqlMysqlDbSystemBackupPolicyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference">MysqlMysqlDbSystemBackupPolicyOutputReference</a>

---

##### `channels`<sup>Required</sup> <a name="channels" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.channels"></a>

```typescript
public readonly channels: MysqlMysqlDbSystemChannelsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList">MysqlMysqlDbSystemChannelsList</a>

---

##### `currentPlacement`<sup>Required</sup> <a name="currentPlacement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.currentPlacement"></a>

```typescript
public readonly currentPlacement: MysqlMysqlDbSystemCurrentPlacementList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList">MysqlMysqlDbSystemCurrentPlacementList</a>

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.customerContacts"></a>

```typescript
public readonly customerContacts: MysqlMysqlDbSystemCustomerContactsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList">MysqlMysqlDbSystemCustomerContactsList</a>

---

##### `dataStorage`<sup>Required</sup> <a name="dataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorage"></a>

```typescript
public readonly dataStorage: MysqlMysqlDbSystemDataStorageOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference">MysqlMysqlDbSystemDataStorageOutputReference</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: MysqlMysqlDbSystemDeletionPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList">MysqlMysqlDbSystemDeletionPolicyList</a>

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.endpoints"></a>

```typescript
public readonly endpoints: MysqlMysqlDbSystemEndpointsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList">MysqlMysqlDbSystemEndpointsList</a>

---

##### `heatWaveCluster`<sup>Required</sup> <a name="heatWaveCluster" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.heatWaveCluster"></a>

```typescript
public readonly heatWaveCluster: MysqlMysqlDbSystemHeatWaveClusterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList">MysqlMysqlDbSystemHeatWaveClusterList</a>

---

##### `isHeatWaveClusterAttached`<sup>Required</sup> <a name="isHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHeatWaveClusterAttached"></a>

```typescript
public readonly isHeatWaveClusterAttached: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.maintenance"></a>

```typescript
public readonly maintenance: MysqlMysqlDbSystemMaintenanceOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference">MysqlMysqlDbSystemMaintenanceOutputReference</a>

---

##### `pointInTimeRecoveryDetails`<sup>Required</sup> <a name="pointInTimeRecoveryDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.pointInTimeRecoveryDetails"></a>

```typescript
public readonly pointInTimeRecoveryDetails: MysqlMysqlDbSystemPointInTimeRecoveryDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList">MysqlMysqlDbSystemPointInTimeRecoveryDetailsList</a>

---

##### `secureConnections`<sup>Required</sup> <a name="secureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.secureConnections"></a>

```typescript
public readonly secureConnections: MysqlMysqlDbSystemSecureConnectionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference">MysqlMysqlDbSystemSecureConnectionsOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.source"></a>

```typescript
public readonly source: MysqlMysqlDbSystemSourceOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference">MysqlMysqlDbSystemSourceOutputReference</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeouts"></a>

```typescript
public readonly timeouts: MysqlMysqlDbSystemTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference">MysqlMysqlDbSystemTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminPasswordInput"></a>

```typescript
public readonly adminPasswordInput: string;
```

- *Type:* string

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminUsernameInput"></a>

```typescript
public readonly adminUsernameInput: string;
```

- *Type:* string

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `backupPolicyInput`<sup>Optional</sup> <a name="backupPolicyInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.backupPolicyInput"></a>

```typescript
public readonly backupPolicyInput: MysqlMysqlDbSystemBackupPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `configurationIdInput`<sup>Optional</sup> <a name="configurationIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.configurationIdInput"></a>

```typescript
public readonly configurationIdInput: string;
```

- *Type:* string

---

##### `crashRecoveryInput`<sup>Optional</sup> <a name="crashRecoveryInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.crashRecoveryInput"></a>

```typescript
public readonly crashRecoveryInput: string;
```

- *Type:* string

---

##### `customerContactsInput`<sup>Optional</sup> <a name="customerContactsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.customerContactsInput"></a>

```typescript
public readonly customerContactsInput: IResolvable | MysqlMysqlDbSystemCustomerContacts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>[]

---

##### `databaseManagementInput`<sup>Optional</sup> <a name="databaseManagementInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.databaseManagementInput"></a>

```typescript
public readonly databaseManagementInput: string;
```

- *Type:* string

---

##### `dataStorageInput`<sup>Optional</sup> <a name="dataStorageInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageInput"></a>

```typescript
public readonly dataStorageInput: MysqlMysqlDbSystemDataStorage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a>

---

##### `dataStorageSizeInGbInput`<sup>Optional</sup> <a name="dataStorageSizeInGbInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageSizeInGbInput"></a>

```typescript
public readonly dataStorageSizeInGbInput: number;
```

- *Type:* number

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: IResolvable | MysqlMysqlDbSystemDeletionPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `faultDomainInput`<sup>Optional</sup> <a name="faultDomainInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.faultDomainInput"></a>

```typescript
public readonly faultDomainInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostnameLabelInput`<sup>Optional</sup> <a name="hostnameLabelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.hostnameLabelInput"></a>

```typescript
public readonly hostnameLabelInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `isHighlyAvailableInput`<sup>Optional</sup> <a name="isHighlyAvailableInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHighlyAvailableInput"></a>

```typescript
public readonly isHighlyAvailableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maintenanceInput`<sup>Optional</sup> <a name="maintenanceInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.maintenanceInput"></a>

```typescript
public readonly maintenanceInput: MysqlMysqlDbSystemMaintenance;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a>

---

##### `mysqlVersionInput`<sup>Optional</sup> <a name="mysqlVersionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.mysqlVersionInput"></a>

```typescript
public readonly mysqlVersionInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portXInput`<sup>Optional</sup> <a name="portXInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portXInput"></a>

```typescript
public readonly portXInput: number;
```

- *Type:* number

---

##### `secureConnectionsInput`<sup>Optional</sup> <a name="secureConnectionsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.secureConnectionsInput"></a>

```typescript
public readonly secureConnectionsInput: MysqlMysqlDbSystemSecureConnections;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a>

---

##### `shapeNameInput`<sup>Optional</sup> <a name="shapeNameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shapeNameInput"></a>

```typescript
public readonly shapeNameInput: string;
```

- *Type:* string

---

##### `shutdownTypeInput`<sup>Optional</sup> <a name="shutdownTypeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shutdownTypeInput"></a>

```typescript
public readonly shutdownTypeInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.sourceInput"></a>

```typescript
public readonly sourceInput: MysqlMysqlDbSystemSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MysqlMysqlDbSystemTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a>

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

---

##### `crashRecovery`<sup>Required</sup> <a name="crashRecovery" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.crashRecovery"></a>

```typescript
public readonly crashRecovery: string;
```

- *Type:* string

---

##### `databaseManagement`<sup>Required</sup> <a name="databaseManagement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.databaseManagement"></a>

```typescript
public readonly databaseManagement: string;
```

- *Type:* string

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.hostnameLabel"></a>

```typescript
public readonly hostnameLabel: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `isHighlyAvailable`<sup>Required</sup> <a name="isHighlyAvailable" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.isHighlyAvailable"></a>

```typescript
public readonly isHighlyAvailable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mysqlVersion`<sup>Required</sup> <a name="mysqlVersion" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.mysqlVersion"></a>

```typescript
public readonly mysqlVersion: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portX`<sup>Required</sup> <a name="portX" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.portX"></a>

```typescript
public readonly portX: number;
```

- *Type:* number

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `shutdownType`<sup>Required</sup> <a name="shutdownType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.shutdownType"></a>

```typescript
public readonly shutdownType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlMysqlDbSystemBackupPolicy <a name="MysqlMysqlDbSystemBackupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemBackupPolicy: mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.pitrPolicy">pitrPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a></code> | pitr_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#retention_in_days MysqlMysqlDbSystem#retention_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.windowStartTime">windowStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}. |

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}.

---

##### `pitrPolicy`<sup>Optional</sup> <a name="pitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.pitrPolicy"></a>

```typescript
public readonly pitrPolicy: MysqlMysqlDbSystemBackupPolicyPitrPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a>

pitr_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#pitr_policy MysqlMysqlDbSystem#pitr_policy}

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#retention_in_days MysqlMysqlDbSystem#retention_in_days}.

---

##### `windowStartTime`<sup>Optional</sup> <a name="windowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy.property.windowStartTime"></a>

```typescript
public readonly windowStartTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}.

---

### MysqlMysqlDbSystemBackupPolicyPitrPolicy <a name="MysqlMysqlDbSystemBackupPolicyPitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemBackupPolicyPitrPolicy: mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_enabled MysqlMysqlDbSystem#is_enabled}.

---

### MysqlMysqlDbSystemChannels <a name="MysqlMysqlDbSystemChannels" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannels.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemChannels: mysqlMysqlDbSystem.MysqlMysqlDbSystemChannels = { ... }
```


### MysqlMysqlDbSystemChannelsSource <a name="MysqlMysqlDbSystemChannelsSource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSource.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemChannelsSource: mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSource = { ... }
```


### MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling <a name="MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling: mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling = { ... }
```


### MysqlMysqlDbSystemChannelsSourceSslCaCertificate <a name="MysqlMysqlDbSystemChannelsSourceSslCaCertificate" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificate.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemChannelsSourceSslCaCertificate: mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificate = { ... }
```


### MysqlMysqlDbSystemChannelsTarget <a name="MysqlMysqlDbSystemChannelsTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTarget.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemChannelsTarget: mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTarget = { ... }
```


### MysqlMysqlDbSystemChannelsTargetFilters <a name="MysqlMysqlDbSystemChannelsTargetFilters" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFilters.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemChannelsTargetFilters: mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFilters = { ... }
```


### MysqlMysqlDbSystemConfig <a name="MysqlMysqlDbSystemConfig" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemConfig: mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#availability_domain MysqlMysqlDbSystem#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#compartment_id MysqlMysqlDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.shapeName">shapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shape_name MysqlMysqlDbSystem#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#subnet_id MysqlMysqlDbSystem#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.adminPassword">adminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_password MysqlMysqlDbSystem#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.adminUsername">adminUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_username MysqlMysqlDbSystem#admin_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.backupPolicy">backupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a></code> | backup_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.configurationId">configurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#configuration_id MysqlMysqlDbSystem#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.crashRecovery">crashRecovery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#crash_recovery MysqlMysqlDbSystem#crash_recovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.customerContacts">customerContacts</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>[]</code> | customer_contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.databaseManagement">databaseManagement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#database_management MysqlMysqlDbSystem#database_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dataStorage">dataStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a></code> | data_storage block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#data_storage_size_in_gb MysqlMysqlDbSystem#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>[]</code> | deletion_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#description MysqlMysqlDbSystem#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#display_name MysqlMysqlDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.faultDomain">faultDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#fault_domain MysqlMysqlDbSystem#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.hostnameLabel">hostnameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#hostname_label MysqlMysqlDbSystem#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#id MysqlMysqlDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#ip_address MysqlMysqlDbSystem#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.isHighlyAvailable">isHighlyAvailable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_highly_available MysqlMysqlDbSystem#is_highly_available}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.maintenance">maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a></code> | maintenance block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.mysqlVersion">mysqlVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#mysql_version MysqlMysqlDbSystem#mysql_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port MysqlMysqlDbSystem#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.portX">portX</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port_x MysqlMysqlDbSystem#port_x}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.secureConnections">secureConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a></code> | secure_connections block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.shutdownType">shutdownType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shutdown_type MysqlMysqlDbSystem#shutdown_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#state MysqlMysqlDbSystem#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#availability_domain MysqlMysqlDbSystem#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#compartment_id MysqlMysqlDbSystem#compartment_id}.

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shape_name MysqlMysqlDbSystem#shape_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#subnet_id MysqlMysqlDbSystem#subnet_id}.

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_password MysqlMysqlDbSystem#admin_password}.

---

##### `adminUsername`<sup>Optional</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#admin_username MysqlMysqlDbSystem#admin_username}.

---

##### `backupPolicy`<sup>Optional</sup> <a name="backupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.backupPolicy"></a>

```typescript
public readonly backupPolicy: MysqlMysqlDbSystemBackupPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#backup_policy MysqlMysqlDbSystem#backup_policy}

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#configuration_id MysqlMysqlDbSystem#configuration_id}.

---

##### `crashRecovery`<sup>Optional</sup> <a name="crashRecovery" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.crashRecovery"></a>

```typescript
public readonly crashRecovery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#crash_recovery MysqlMysqlDbSystem#crash_recovery}.

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.customerContacts"></a>

```typescript
public readonly customerContacts: IResolvable | MysqlMysqlDbSystemCustomerContacts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>[]

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#customer_contacts MysqlMysqlDbSystem#customer_contacts}

---

##### `databaseManagement`<sup>Optional</sup> <a name="databaseManagement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.databaseManagement"></a>

```typescript
public readonly databaseManagement: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#database_management MysqlMysqlDbSystem#database_management}.

---

##### `dataStorage`<sup>Optional</sup> <a name="dataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dataStorage"></a>

```typescript
public readonly dataStorage: MysqlMysqlDbSystemDataStorage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a>

data_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#data_storage MysqlMysqlDbSystem#data_storage}

---

##### `dataStorageSizeInGb`<sup>Optional</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#data_storage_size_in_gb MysqlMysqlDbSystem#data_storage_size_in_gb}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#defined_tags MysqlMysqlDbSystem#defined_tags}.

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: IResolvable | MysqlMysqlDbSystemDeletionPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>[]

deletion_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#deletion_policy MysqlMysqlDbSystem#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#description MysqlMysqlDbSystem#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#display_name MysqlMysqlDbSystem#display_name}.

---

##### `faultDomain`<sup>Optional</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#fault_domain MysqlMysqlDbSystem#fault_domain}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#freeform_tags MysqlMysqlDbSystem#freeform_tags}.

---

##### `hostnameLabel`<sup>Optional</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.hostnameLabel"></a>

```typescript
public readonly hostnameLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#hostname_label MysqlMysqlDbSystem#hostname_label}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#id MysqlMysqlDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#ip_address MysqlMysqlDbSystem#ip_address}.

---

##### `isHighlyAvailable`<sup>Optional</sup> <a name="isHighlyAvailable" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.isHighlyAvailable"></a>

```typescript
public readonly isHighlyAvailable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_highly_available MysqlMysqlDbSystem#is_highly_available}.

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.maintenance"></a>

```typescript
public readonly maintenance: MysqlMysqlDbSystemMaintenance;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a>

maintenance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#maintenance MysqlMysqlDbSystem#maintenance}

---

##### `mysqlVersion`<sup>Optional</sup> <a name="mysqlVersion" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.mysqlVersion"></a>

```typescript
public readonly mysqlVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#mysql_version MysqlMysqlDbSystem#mysql_version}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port MysqlMysqlDbSystem#port}.

---

##### `portX`<sup>Optional</sup> <a name="portX" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.portX"></a>

```typescript
public readonly portX: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#port_x MysqlMysqlDbSystem#port_x}.

---

##### `secureConnections`<sup>Optional</sup> <a name="secureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.secureConnections"></a>

```typescript
public readonly secureConnections: MysqlMysqlDbSystemSecureConnections;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a>

secure_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#secure_connections MysqlMysqlDbSystem#secure_connections}

---

##### `shutdownType`<sup>Optional</sup> <a name="shutdownType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.shutdownType"></a>

```typescript
public readonly shutdownType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#shutdown_type MysqlMysqlDbSystem#shutdown_type}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.source"></a>

```typescript
public readonly source: MysqlMysqlDbSystemSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source MysqlMysqlDbSystem#source}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#state MysqlMysqlDbSystem#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MysqlMysqlDbSystemTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#timeouts MysqlMysqlDbSystem#timeouts}

---

### MysqlMysqlDbSystemCurrentPlacement <a name="MysqlMysqlDbSystemCurrentPlacement" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacement"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacement.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemCurrentPlacement: mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacement = { ... }
```


### MysqlMysqlDbSystemCustomerContacts <a name="MysqlMysqlDbSystemCustomerContacts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemCustomerContacts: mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#email MysqlMysqlDbSystem#email}. |

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#email MysqlMysqlDbSystem#email}.

---

### MysqlMysqlDbSystemDataStorage <a name="MysqlMysqlDbSystemDataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemDataStorage: mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.property.isAutoExpandStorageEnabled">isAutoExpandStorageEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_auto_expand_storage_enabled MysqlMysqlDbSystem#is_auto_expand_storage_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.property.maxStorageSizeInGbs">maxStorageSizeInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#max_storage_size_in_gbs MysqlMysqlDbSystem#max_storage_size_in_gbs}. |

---

##### `isAutoExpandStorageEnabled`<sup>Optional</sup> <a name="isAutoExpandStorageEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.property.isAutoExpandStorageEnabled"></a>

```typescript
public readonly isAutoExpandStorageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_auto_expand_storage_enabled MysqlMysqlDbSystem#is_auto_expand_storage_enabled}.

---

##### `maxStorageSizeInGbs`<sup>Optional</sup> <a name="maxStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage.property.maxStorageSizeInGbs"></a>

```typescript
public readonly maxStorageSizeInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#max_storage_size_in_gbs MysqlMysqlDbSystem#max_storage_size_in_gbs}.

---

### MysqlMysqlDbSystemDeletionPolicy <a name="MysqlMysqlDbSystemDeletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemDeletionPolicy: mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.automaticBackupRetention">automaticBackupRetention</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#automatic_backup_retention MysqlMysqlDbSystem#automatic_backup_retention}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.finalBackup">finalBackup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#final_backup MysqlMysqlDbSystem#final_backup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.isDeleteProtected">isDeleteProtected</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_delete_protected MysqlMysqlDbSystem#is_delete_protected}. |

---

##### `automaticBackupRetention`<sup>Optional</sup> <a name="automaticBackupRetention" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.automaticBackupRetention"></a>

```typescript
public readonly automaticBackupRetention: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#automatic_backup_retention MysqlMysqlDbSystem#automatic_backup_retention}.

---

##### `finalBackup`<sup>Optional</sup> <a name="finalBackup" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.finalBackup"></a>

```typescript
public readonly finalBackup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#final_backup MysqlMysqlDbSystem#final_backup}.

---

##### `isDeleteProtected`<sup>Optional</sup> <a name="isDeleteProtected" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy.property.isDeleteProtected"></a>

```typescript
public readonly isDeleteProtected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#is_delete_protected MysqlMysqlDbSystem#is_delete_protected}.

---

### MysqlMysqlDbSystemEndpoints <a name="MysqlMysqlDbSystemEndpoints" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpoints.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemEndpoints: mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpoints = { ... }
```


### MysqlMysqlDbSystemHeatWaveCluster <a name="MysqlMysqlDbSystemHeatWaveCluster" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveCluster"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveCluster.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemHeatWaveCluster: mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveCluster = { ... }
```


### MysqlMysqlDbSystemMaintenance <a name="MysqlMysqlDbSystemMaintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemMaintenance: mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance.property.windowStartTime">windowStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}. |

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance.property.windowStartTime"></a>

```typescript
public readonly windowStartTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#window_start_time MysqlMysqlDbSystem#window_start_time}.

---

### MysqlMysqlDbSystemPointInTimeRecoveryDetails <a name="MysqlMysqlDbSystemPointInTimeRecoveryDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetails.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemPointInTimeRecoveryDetails: mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetails = { ... }
```


### MysqlMysqlDbSystemSecureConnections <a name="MysqlMysqlDbSystemSecureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemSecureConnections: mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.property.certificateGenerationType">certificateGenerationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#certificate_generation_type MysqlMysqlDbSystem#certificate_generation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.property.certificateId">certificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#certificate_id MysqlMysqlDbSystem#certificate_id}. |

---

##### `certificateGenerationType`<sup>Required</sup> <a name="certificateGenerationType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.property.certificateGenerationType"></a>

```typescript
public readonly certificateGenerationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#certificate_generation_type MysqlMysqlDbSystem#certificate_generation_type}.

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#certificate_id MysqlMysqlDbSystem#certificate_id}.

---

### MysqlMysqlDbSystemSource <a name="MysqlMysqlDbSystemSource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemSource: mysqlMysqlDbSystem.MysqlMysqlDbSystemSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source_type MysqlMysqlDbSystem#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.backupId">backupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#backup_id MysqlMysqlDbSystem#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#db_system_id MysqlMysqlDbSystem#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.recoveryPoint">recoveryPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#recovery_point MysqlMysqlDbSystem#recovery_point}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source_url MysqlMysqlDbSystem#source_url}. |

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source_type MysqlMysqlDbSystem#source_type}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#backup_id MysqlMysqlDbSystem#backup_id}.

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#db_system_id MysqlMysqlDbSystem#db_system_id}.

---

##### `recoveryPoint`<sup>Optional</sup> <a name="recoveryPoint" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.recoveryPoint"></a>

```typescript
public readonly recoveryPoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#recovery_point MysqlMysqlDbSystem#recovery_point}.

---

##### `sourceUrl`<sup>Optional</sup> <a name="sourceUrl" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#source_url MysqlMysqlDbSystem#source_url}.

---

### MysqlMysqlDbSystemTimeouts <a name="MysqlMysqlDbSystemTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlDbSystemTimeouts: mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#create MysqlMysqlDbSystem#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#delete MysqlMysqlDbSystem#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#update MysqlMysqlDbSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#create MysqlMysqlDbSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#delete MysqlMysqlDbSystem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_db_system#update MysqlMysqlDbSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlMysqlDbSystemBackupPolicyOutputReference <a name="MysqlMysqlDbSystemBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.putPitrPolicy">putPitrPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetPitrPolicy">resetPitrPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetWindowStartTime">resetWindowStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPitrPolicy` <a name="putPitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.putPitrPolicy"></a>

```typescript
public putPitrPolicy(value: MysqlMysqlDbSystemBackupPolicyPitrPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.putPitrPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetPitrPolicy` <a name="resetPitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetPitrPolicy"></a>

```typescript
public resetPitrPolicy(): void
```

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetRetentionInDays"></a>

```typescript
public resetRetentionInDays(): void
```

##### `resetWindowStartTime` <a name="resetWindowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.resetWindowStartTime"></a>

```typescript
public resetWindowStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.pitrPolicy">pitrPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference">MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.pitrPolicyInput">pitrPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.windowStartTimeInput">windowStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.windowStartTime">windowStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pitrPolicy`<sup>Required</sup> <a name="pitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.pitrPolicy"></a>

```typescript
public readonly pitrPolicy: MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference">MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pitrPolicyInput`<sup>Optional</sup> <a name="pitrPolicyInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.pitrPolicyInput"></a>

```typescript
public readonly pitrPolicyInput: MysqlMysqlDbSystemBackupPolicyPitrPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a>

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `windowStartTimeInput`<sup>Optional</sup> <a name="windowStartTimeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.windowStartTimeInput"></a>

```typescript
public readonly windowStartTimeInput: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.windowStartTime"></a>

```typescript
public readonly windowStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlDbSystemBackupPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicy">MysqlMysqlDbSystemBackupPolicy</a>

---


### MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference <a name="MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlDbSystemBackupPolicyPitrPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemBackupPolicyPitrPolicy">MysqlMysqlDbSystemBackupPolicyPitrPolicy</a>

---


### MysqlMysqlDbSystemChannelsList <a name="MysqlMysqlDbSystemChannelsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.get"></a>

```typescript
public get(index: number): MysqlMysqlDbSystemChannelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MysqlMysqlDbSystemChannelsOutputReference <a name="MysqlMysqlDbSystemChannelsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList">MysqlMysqlDbSystemChannelsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList">MysqlMysqlDbSystemChannelsTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannels">MysqlMysqlDbSystemChannels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.source"></a>

```typescript
public readonly source: MysqlMysqlDbSystemChannelsSourceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList">MysqlMysqlDbSystemChannelsSourceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.target"></a>

```typescript
public readonly target: MysqlMysqlDbSystemChannelsTargetList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList">MysqlMysqlDbSystemChannelsTargetList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlDbSystemChannels;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannels">MysqlMysqlDbSystemChannels</a>

---


### MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList <a name="MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.get"></a>

```typescript
public get(index: number): MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference <a name="MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename">lastConfiguredLogFilename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset">lastConfiguredLogOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling">MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastConfiguredLogFilename`<sup>Required</sup> <a name="lastConfiguredLogFilename" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename"></a>

```typescript
public readonly lastConfiguredLogFilename: string;
```

- *Type:* string

---

##### `lastConfiguredLogOffset`<sup>Required</sup> <a name="lastConfiguredLogOffset" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset"></a>

```typescript
public readonly lastConfiguredLogOffset: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling">MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling</a>

---


### MysqlMysqlDbSystemChannelsSourceList <a name="MysqlMysqlDbSystemChannelsSourceList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.get"></a>

```typescript
public get(index: number): MysqlMysqlDbSystemChannelsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MysqlMysqlDbSystemChannelsSourceOutputReference <a name="MysqlMysqlDbSystemChannelsSourceOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.anonymousTransactionsHandling">anonymousTransactionsHandling</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList">MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sslCaCertificate">sslCaCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList">MysqlMysqlDbSystemChannelsSourceSslCaCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSource">MysqlMysqlDbSystemChannelsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `anonymousTransactionsHandling`<sup>Required</sup> <a name="anonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.anonymousTransactionsHandling"></a>

```typescript
public readonly anonymousTransactionsHandling: MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList">MysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `sslCaCertificate`<sup>Required</sup> <a name="sslCaCertificate" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sslCaCertificate"></a>

```typescript
public readonly sslCaCertificate: MysqlMysqlDbSystemChannelsSourceSslCaCertificateList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList">MysqlMysqlDbSystemChannelsSourceSslCaCertificateList</a>

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlDbSystemChannelsSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSource">MysqlMysqlDbSystemChannelsSource</a>

---


### MysqlMysqlDbSystemChannelsSourceSslCaCertificateList <a name="MysqlMysqlDbSystemChannelsSourceSslCaCertificateList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.get"></a>

```typescript
public get(index: number): MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference <a name="MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.certificateType">certificateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.contents">contents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificate">MysqlMysqlDbSystemChannelsSourceSslCaCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateType`<sup>Required</sup> <a name="certificateType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.certificateType"></a>

```typescript
public readonly certificateType: string;
```

- *Type:* string

---

##### `contents`<sup>Required</sup> <a name="contents" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.contents"></a>

```typescript
public readonly contents: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlDbSystemChannelsSourceSslCaCertificate;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsSourceSslCaCertificate">MysqlMysqlDbSystemChannelsSourceSslCaCertificate</a>

---


### MysqlMysqlDbSystemChannelsTargetFiltersList <a name="MysqlMysqlDbSystemChannelsTargetFiltersList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.get"></a>

```typescript
public get(index: number): MysqlMysqlDbSystemChannelsTargetFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MysqlMysqlDbSystemChannelsTargetFiltersOutputReference <a name="MysqlMysqlDbSystemChannelsTargetFiltersOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFilters">MysqlMysqlDbSystemChannelsTargetFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlDbSystemChannelsTargetFilters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFilters">MysqlMysqlDbSystemChannelsTargetFilters</a>

---


### MysqlMysqlDbSystemChannelsTargetList <a name="MysqlMysqlDbSystemChannelsTargetList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.get"></a>

```typescript
public get(index: number): MysqlMysqlDbSystemChannelsTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MysqlMysqlDbSystemChannelsTargetOutputReference <a name="MysqlMysqlDbSystemChannelsTargetOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.applierUsername">applierUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.delayInSeconds">delayInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.filters">filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList">MysqlMysqlDbSystemChannelsTargetFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.tablesWithoutPrimaryKeyHandling">tablesWithoutPrimaryKeyHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTarget">MysqlMysqlDbSystemChannelsTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applierUsername`<sup>Required</sup> <a name="applierUsername" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.applierUsername"></a>

```typescript
public readonly applierUsername: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `delayInSeconds`<sup>Required</sup> <a name="delayInSeconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.delayInSeconds"></a>

```typescript
public readonly delayInSeconds: number;
```

- *Type:* number

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.filters"></a>

```typescript
public readonly filters: MysqlMysqlDbSystemChannelsTargetFiltersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetFiltersList">MysqlMysqlDbSystemChannelsTargetFiltersList</a>

---

##### `tablesWithoutPrimaryKeyHandling`<sup>Required</sup> <a name="tablesWithoutPrimaryKeyHandling" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.tablesWithoutPrimaryKeyHandling"></a>

```typescript
public readonly tablesWithoutPrimaryKeyHandling: string;
```

- *Type:* string

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlDbSystemChannelsTarget;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemChannelsTarget">MysqlMysqlDbSystemChannelsTarget</a>

---


### MysqlMysqlDbSystemCurrentPlacementList <a name="MysqlMysqlDbSystemCurrentPlacementList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.get"></a>

```typescript
public get(index: number): MysqlMysqlDbSystemCurrentPlacementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MysqlMysqlDbSystemCurrentPlacementOutputReference <a name="MysqlMysqlDbSystemCurrentPlacementOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacement">MysqlMysqlDbSystemCurrentPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlDbSystemCurrentPlacement;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCurrentPlacement">MysqlMysqlDbSystemCurrentPlacement</a>

---


### MysqlMysqlDbSystemCustomerContactsList <a name="MysqlMysqlDbSystemCustomerContactsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.get"></a>

```typescript
public get(index: number): MysqlMysqlDbSystemCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MysqlMysqlDbSystemCustomerContacts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>[]

---


### MysqlMysqlDbSystemCustomerContactsOutputReference <a name="MysqlMysqlDbSystemCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MysqlMysqlDbSystemCustomerContacts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemCustomerContacts">MysqlMysqlDbSystemCustomerContacts</a>

---


### MysqlMysqlDbSystemDataStorageOutputReference <a name="MysqlMysqlDbSystemDataStorageOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resetIsAutoExpandStorageEnabled">resetIsAutoExpandStorageEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resetMaxStorageSizeInGbs">resetMaxStorageSizeInGbs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsAutoExpandStorageEnabled` <a name="resetIsAutoExpandStorageEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resetIsAutoExpandStorageEnabled"></a>

```typescript
public resetIsAutoExpandStorageEnabled(): void
```

##### `resetMaxStorageSizeInGbs` <a name="resetMaxStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.resetMaxStorageSizeInGbs"></a>

```typescript
public resetMaxStorageSizeInGbs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.allocatedStorageSizeInGbs">allocatedStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeLimitInGbs">dataStorageSizeLimitInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.isAutoExpandStorageEnabledInput">isAutoExpandStorageEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.maxStorageSizeInGbsInput">maxStorageSizeInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.isAutoExpandStorageEnabled">isAutoExpandStorageEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.maxStorageSizeInGbs">maxStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocatedStorageSizeInGbs`<sup>Required</sup> <a name="allocatedStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.allocatedStorageSizeInGbs"></a>

```typescript
public readonly allocatedStorageSizeInGbs: number;
```

- *Type:* number

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

---

##### `dataStorageSizeLimitInGbs`<sup>Required</sup> <a name="dataStorageSizeLimitInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeLimitInGbs"></a>

```typescript
public readonly dataStorageSizeLimitInGbs: number;
```

- *Type:* number

---

##### `isAutoExpandStorageEnabledInput`<sup>Optional</sup> <a name="isAutoExpandStorageEnabledInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.isAutoExpandStorageEnabledInput"></a>

```typescript
public readonly isAutoExpandStorageEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxStorageSizeInGbsInput`<sup>Optional</sup> <a name="maxStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.maxStorageSizeInGbsInput"></a>

```typescript
public readonly maxStorageSizeInGbsInput: number;
```

- *Type:* number

---

##### `isAutoExpandStorageEnabled`<sup>Required</sup> <a name="isAutoExpandStorageEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.isAutoExpandStorageEnabled"></a>

```typescript
public readonly isAutoExpandStorageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxStorageSizeInGbs`<sup>Required</sup> <a name="maxStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.maxStorageSizeInGbs"></a>

```typescript
public readonly maxStorageSizeInGbs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlDbSystemDataStorage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDataStorage">MysqlMysqlDbSystemDataStorage</a>

---


### MysqlMysqlDbSystemDeletionPolicyList <a name="MysqlMysqlDbSystemDeletionPolicyList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.get"></a>

```typescript
public get(index: number): MysqlMysqlDbSystemDeletionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MysqlMysqlDbSystemDeletionPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>[]

---


### MysqlMysqlDbSystemDeletionPolicyOutputReference <a name="MysqlMysqlDbSystemDeletionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetAutomaticBackupRetention">resetAutomaticBackupRetention</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetFinalBackup">resetFinalBackup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetIsDeleteProtected">resetIsDeleteProtected</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutomaticBackupRetention` <a name="resetAutomaticBackupRetention" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetAutomaticBackupRetention"></a>

```typescript
public resetAutomaticBackupRetention(): void
```

##### `resetFinalBackup` <a name="resetFinalBackup" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetFinalBackup"></a>

```typescript
public resetFinalBackup(): void
```

##### `resetIsDeleteProtected` <a name="resetIsDeleteProtected" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.resetIsDeleteProtected"></a>

```typescript
public resetIsDeleteProtected(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.automaticBackupRetentionInput">automaticBackupRetentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.finalBackupInput">finalBackupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.isDeleteProtectedInput">isDeleteProtectedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.automaticBackupRetention">automaticBackupRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.finalBackup">finalBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.isDeleteProtected">isDeleteProtected</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automaticBackupRetentionInput`<sup>Optional</sup> <a name="automaticBackupRetentionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.automaticBackupRetentionInput"></a>

```typescript
public readonly automaticBackupRetentionInput: string;
```

- *Type:* string

---

##### `finalBackupInput`<sup>Optional</sup> <a name="finalBackupInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.finalBackupInput"></a>

```typescript
public readonly finalBackupInput: string;
```

- *Type:* string

---

##### `isDeleteProtectedInput`<sup>Optional</sup> <a name="isDeleteProtectedInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.isDeleteProtectedInput"></a>

```typescript
public readonly isDeleteProtectedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `automaticBackupRetention`<sup>Required</sup> <a name="automaticBackupRetention" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.automaticBackupRetention"></a>

```typescript
public readonly automaticBackupRetention: string;
```

- *Type:* string

---

##### `finalBackup`<sup>Required</sup> <a name="finalBackup" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.finalBackup"></a>

```typescript
public readonly finalBackup: string;
```

- *Type:* string

---

##### `isDeleteProtected`<sup>Required</sup> <a name="isDeleteProtected" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.isDeleteProtected"></a>

```typescript
public readonly isDeleteProtected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MysqlMysqlDbSystemDeletionPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemDeletionPolicy">MysqlMysqlDbSystemDeletionPolicy</a>

---


### MysqlMysqlDbSystemEndpointsList <a name="MysqlMysqlDbSystemEndpointsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.get"></a>

```typescript
public get(index: number): MysqlMysqlDbSystemEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MysqlMysqlDbSystemEndpointsOutputReference <a name="MysqlMysqlDbSystemEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.modes">modes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.portX">portX</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.statusDetails">statusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpoints">MysqlMysqlDbSystemEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `modes`<sup>Required</sup> <a name="modes" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.modes"></a>

```typescript
public readonly modes: string[];
```

- *Type:* string[]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portX`<sup>Required</sup> <a name="portX" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.portX"></a>

```typescript
public readonly portX: number;
```

- *Type:* number

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusDetails`<sup>Required</sup> <a name="statusDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.statusDetails"></a>

```typescript
public readonly statusDetails: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlDbSystemEndpoints;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemEndpoints">MysqlMysqlDbSystemEndpoints</a>

---


### MysqlMysqlDbSystemHeatWaveClusterList <a name="MysqlMysqlDbSystemHeatWaveClusterList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.get"></a>

```typescript
public get(index: number): MysqlMysqlDbSystemHeatWaveClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MysqlMysqlDbSystemHeatWaveClusterOutputReference <a name="MysqlMysqlDbSystemHeatWaveClusterOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.clusterSize">clusterSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.isLakehouseEnabled">isLakehouseEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveCluster">MysqlMysqlDbSystemHeatWaveCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterSize`<sup>Required</sup> <a name="clusterSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.clusterSize"></a>

```typescript
public readonly clusterSize: number;
```

- *Type:* number

---

##### `isLakehouseEnabled`<sup>Required</sup> <a name="isLakehouseEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.isLakehouseEnabled"></a>

```typescript
public readonly isLakehouseEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlDbSystemHeatWaveCluster;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemHeatWaveCluster">MysqlMysqlDbSystemHeatWaveCluster</a>

---


### MysqlMysqlDbSystemMaintenanceOutputReference <a name="MysqlMysqlDbSystemMaintenanceOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.windowStartTimeInput">windowStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.windowStartTime">windowStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `windowStartTimeInput`<sup>Optional</sup> <a name="windowStartTimeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.windowStartTimeInput"></a>

```typescript
public readonly windowStartTimeInput: string;
```

- *Type:* string

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.windowStartTime"></a>

```typescript
public readonly windowStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlDbSystemMaintenance;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemMaintenance">MysqlMysqlDbSystemMaintenance</a>

---


### MysqlMysqlDbSystemPointInTimeRecoveryDetailsList <a name="MysqlMysqlDbSystemPointInTimeRecoveryDetailsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.get"></a>

```typescript
public get(index: number): MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference <a name="MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeEarliestRecoveryPoint">timeEarliestRecoveryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeLatestRecoveryPoint">timeLatestRecoveryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetails">MysqlMysqlDbSystemPointInTimeRecoveryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeEarliestRecoveryPoint`<sup>Required</sup> <a name="timeEarliestRecoveryPoint" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeEarliestRecoveryPoint"></a>

```typescript
public readonly timeEarliestRecoveryPoint: string;
```

- *Type:* string

---

##### `timeLatestRecoveryPoint`<sup>Required</sup> <a name="timeLatestRecoveryPoint" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeLatestRecoveryPoint"></a>

```typescript
public readonly timeLatestRecoveryPoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlDbSystemPointInTimeRecoveryDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemPointInTimeRecoveryDetails">MysqlMysqlDbSystemPointInTimeRecoveryDetails</a>

---


### MysqlMysqlDbSystemSecureConnectionsOutputReference <a name="MysqlMysqlDbSystemSecureConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resetCertificateId">resetCertificateId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateId` <a name="resetCertificateId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.resetCertificateId"></a>

```typescript
public resetCertificateId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateGenerationTypeInput">certificateGenerationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateGenerationType">certificateGenerationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateGenerationTypeInput`<sup>Optional</sup> <a name="certificateGenerationTypeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateGenerationTypeInput"></a>

```typescript
public readonly certificateGenerationTypeInput: string;
```

- *Type:* string

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `certificateGenerationType`<sup>Required</sup> <a name="certificateGenerationType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateGenerationType"></a>

```typescript
public readonly certificateGenerationType: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlDbSystemSecureConnections;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSecureConnections">MysqlMysqlDbSystemSecureConnections</a>

---


### MysqlMysqlDbSystemSourceOutputReference <a name="MysqlMysqlDbSystemSourceOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetDbSystemId">resetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetRecoveryPoint">resetRecoveryPoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetSourceUrl">resetSourceUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupId` <a name="resetBackupId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetBackupId"></a>

```typescript
public resetBackupId(): void
```

##### `resetDbSystemId` <a name="resetDbSystemId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetDbSystemId"></a>

```typescript
public resetDbSystemId(): void
```

##### `resetRecoveryPoint` <a name="resetRecoveryPoint" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetRecoveryPoint"></a>

```typescript
public resetRecoveryPoint(): void
```

##### `resetSourceUrl` <a name="resetSourceUrl" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.resetSourceUrl"></a>

```typescript
public resetSourceUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.backupIdInput">backupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.recoveryPointInput">recoveryPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceUrlInput">sourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.backupId">backupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.recoveryPoint">recoveryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.backupIdInput"></a>

```typescript
public readonly backupIdInput: string;
```

- *Type:* string

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.dbSystemIdInput"></a>

```typescript
public readonly dbSystemIdInput: string;
```

- *Type:* string

---

##### `recoveryPointInput`<sup>Optional</sup> <a name="recoveryPointInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.recoveryPointInput"></a>

```typescript
public readonly recoveryPointInput: string;
```

- *Type:* string

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `sourceUrlInput`<sup>Optional</sup> <a name="sourceUrlInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceUrlInput"></a>

```typescript
public readonly sourceUrlInput: string;
```

- *Type:* string

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `recoveryPoint`<sup>Required</sup> <a name="recoveryPoint" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.recoveryPoint"></a>

```typescript
public readonly recoveryPoint: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlDbSystemSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemSource">MysqlMysqlDbSystemSource</a>

---


### MysqlMysqlDbSystemTimeoutsOutputReference <a name="MysqlMysqlDbSystemTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MysqlMysqlDbSystemTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlDbSystem.MysqlMysqlDbSystemTimeouts">MysqlMysqlDbSystemTimeouts</a>

---



