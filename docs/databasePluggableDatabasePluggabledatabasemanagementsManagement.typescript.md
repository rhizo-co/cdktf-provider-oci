# `databasePluggableDatabasePluggabledatabasemanagementsManagement` Submodule <a name="`databasePluggableDatabasePluggabledatabasemanagementsManagement` Submodule" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabasePluggableDatabasePluggabledatabasemanagementsManagement <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management oci_database_pluggable_database_pluggabledatabasemanagements_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer"></a>

```typescript
import { databasePluggableDatabasePluggabledatabasemanagementsManagement } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement(scope: Construct, id: string, config: DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig">DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig">DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.putCredentialDetails">putCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetSslSecretId">resetSslSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCredentialDetails` <a name="putCredentialDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.putCredentialDetails"></a>

```typescript
public putCredentialDetails(value: DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.putCredentialDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetRole` <a name="resetRole" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetSslSecretId` <a name="resetSslSecretId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetSslSecretId"></a>

```typescript
public resetSslSecretId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabasePluggableDatabasePluggabledatabasemanagementsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isConstruct"></a>

```typescript
import { databasePluggableDatabasePluggabledatabasemanagementsManagement } from 'rhizo-co-terraform-provider-oci'

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isTerraformElement"></a>

```typescript
import { databasePluggableDatabasePluggabledatabasemanagementsManagement } from 'rhizo-co-terraform-provider-oci'

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isTerraformResource"></a>

```typescript
import { databasePluggableDatabasePluggabledatabasemanagementsManagement } from 'rhizo-co-terraform-provider-oci'

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.generateConfigForImport"></a>

```typescript
import { databasePluggableDatabasePluggabledatabasemanagementsManagement } from 'rhizo-co-terraform-provider-oci'

databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabasePluggableDatabasePluggabledatabasemanagementsManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabasePluggableDatabasePluggabledatabasemanagementsManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabasePluggableDatabasePluggabledatabasemanagementsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabasePluggableDatabasePluggabledatabasemanagementsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.connectionStrings">connectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList">DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.containerDatabaseId">containerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.credentialDetails">credentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.isRestricted">isRestricted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.openMode">openMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.pdbName">pdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.pluggableDatabaseManagementConfig">pluggableDatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList">DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.credentialDetailsInput">credentialDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.enablePluggabledatabasemanagementInput">enablePluggabledatabasemanagementInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.pluggableDatabaseIdInput">pluggableDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.privateEndPointIdInput">privateEndPointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.sslSecretIdInput">sslSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.enablePluggabledatabasemanagement">enablePluggabledatabasemanagement</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.pluggableDatabaseId">pluggableDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.privateEndPointId">privateEndPointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.sslSecretId">sslSecretId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList">DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList</a>

---

##### `containerDatabaseId`<sup>Required</sup> <a name="containerDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.containerDatabaseId"></a>

```typescript
public readonly containerDatabaseId: string;
```

- *Type:* string

---

##### `credentialDetails`<sup>Required</sup> <a name="credentialDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.credentialDetails"></a>

```typescript
public readonly credentialDetails: DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `isRestricted`<sup>Required</sup> <a name="isRestricted" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.isRestricted"></a>

```typescript
public readonly isRestricted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.openMode"></a>

```typescript
public readonly openMode: string;
```

- *Type:* string

---

##### `pdbName`<sup>Required</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.pdbName"></a>

```typescript
public readonly pdbName: string;
```

- *Type:* string

---

##### `pluggableDatabaseManagementConfig`<sup>Required</sup> <a name="pluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.pluggableDatabaseManagementConfig"></a>

```typescript
public readonly pluggableDatabaseManagementConfig: DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList">DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.timeouts"></a>

```typescript
public readonly timeouts: DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference</a>

---

##### `credentialDetailsInput`<sup>Optional</sup> <a name="credentialDetailsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.credentialDetailsInput"></a>

```typescript
public readonly credentialDetailsInput: DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails</a>

---

##### `enablePluggabledatabasemanagementInput`<sup>Optional</sup> <a name="enablePluggabledatabasemanagementInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.enablePluggabledatabasemanagementInput"></a>

```typescript
public readonly enablePluggabledatabasemanagementInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `pluggableDatabaseIdInput`<sup>Optional</sup> <a name="pluggableDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.pluggableDatabaseIdInput"></a>

```typescript
public readonly pluggableDatabaseIdInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `privateEndPointIdInput`<sup>Optional</sup> <a name="privateEndPointIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.privateEndPointIdInput"></a>

```typescript
public readonly privateEndPointIdInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `sslSecretIdInput`<sup>Optional</sup> <a name="sslSecretIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.sslSecretIdInput"></a>

```typescript
public readonly sslSecretIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts</a>

---

##### `enablePluggabledatabasemanagement`<sup>Required</sup> <a name="enablePluggabledatabasemanagement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.enablePluggabledatabasemanagement"></a>

```typescript
public readonly enablePluggabledatabasemanagement: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pluggableDatabaseId`<sup>Required</sup> <a name="pluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.pluggableDatabaseId"></a>

```typescript
public readonly pluggableDatabaseId: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `privateEndPointId`<sup>Required</sup> <a name="privateEndPointId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.privateEndPointId"></a>

```typescript
public readonly privateEndPointId: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `sslSecretId`<sup>Required</sup> <a name="sslSecretId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.sslSecretId"></a>

```typescript
public readonly sslSecretId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.Initializer"></a>

```typescript
import { databasePluggableDatabasePluggabledatabasemanagementsManagement } from 'rhizo-co-terraform-provider-oci'

const databasePluggableDatabasePluggabledatabasemanagementsManagementConfig: databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.credentialDetails">credentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails</a></code> | credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.enablePluggabledatabasemanagement">enablePluggabledatabasemanagement</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#enable_pluggabledatabasemanagement DatabasePluggableDatabasePluggabledatabasemanagementsManagement#enable_pluggabledatabasemanagement}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.pluggableDatabaseId">pluggableDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#pluggable_database_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.privateEndPointId">privateEndPointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#private_end_point_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#private_end_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#service_name DatabasePluggableDatabasePluggabledatabasemanagementsManagement#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#port DatabasePluggableDatabasePluggabledatabasemanagementsManagement#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#protocol DatabasePluggableDatabasePluggabledatabasemanagementsManagement#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#role DatabasePluggableDatabasePluggabledatabasemanagementsManagement#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.sslSecretId">sslSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#ssl_secret_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#ssl_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `credentialDetails`<sup>Required</sup> <a name="credentialDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.credentialDetails"></a>

```typescript
public readonly credentialDetails: DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails</a>

credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#credential_details DatabasePluggableDatabasePluggabledatabasemanagementsManagement#credential_details}

---

##### `enablePluggabledatabasemanagement`<sup>Required</sup> <a name="enablePluggabledatabasemanagement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.enablePluggabledatabasemanagement"></a>

```typescript
public readonly enablePluggabledatabasemanagement: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#enable_pluggabledatabasemanagement DatabasePluggableDatabasePluggabledatabasemanagementsManagement#enable_pluggabledatabasemanagement}.

---

##### `pluggableDatabaseId`<sup>Required</sup> <a name="pluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.pluggableDatabaseId"></a>

```typescript
public readonly pluggableDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#pluggable_database_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#pluggable_database_id}.

---

##### `privateEndPointId`<sup>Required</sup> <a name="privateEndPointId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.privateEndPointId"></a>

```typescript
public readonly privateEndPointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#private_end_point_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#private_end_point_id}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#service_name DatabasePluggableDatabasePluggabledatabasemanagementsManagement#service_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#port DatabasePluggableDatabasePluggabledatabasemanagementsManagement#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#protocol DatabasePluggableDatabasePluggabledatabasemanagementsManagement#protocol}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#role DatabasePluggableDatabasePluggabledatabasemanagementsManagement#role}.

---

##### `sslSecretId`<sup>Optional</sup> <a name="sslSecretId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.sslSecretId"></a>

```typescript
public readonly sslSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#ssl_secret_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#ssl_secret_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#timeouts DatabasePluggableDatabasePluggabledatabasemanagementsManagement#timeouts}

---

### DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings.Initializer"></a>

```typescript
import { databasePluggableDatabasePluggabledatabasemanagementsManagement } from 'rhizo-co-terraform-provider-oci'

const databasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings: databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings = { ... }
```


### DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails.Initializer"></a>

```typescript
import { databasePluggableDatabasePluggabledatabasemanagementsManagement } from 'rhizo-co-terraform-provider-oci'

const databasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails: databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#password_secret_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#user_name DatabasePluggableDatabasePluggabledatabasemanagementsManagement#user_name}. |

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#password_secret_id DatabasePluggableDatabasePluggabledatabasemanagementsManagement#password_secret_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#user_name DatabasePluggableDatabasePluggabledatabasemanagementsManagement#user_name}.

---

### DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig.Initializer"></a>

```typescript
import { databasePluggableDatabasePluggabledatabasemanagementsManagement } from 'rhizo-co-terraform-provider-oci'

const databasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig: databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig = { ... }
```


### DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts.Initializer"></a>

```typescript
import { databasePluggableDatabasePluggabledatabasemanagementsManagement } from 'rhizo-co-terraform-provider-oci'

const databasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts: databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#create DatabasePluggableDatabasePluggabledatabasemanagementsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#delete DatabasePluggableDatabasePluggabledatabasemanagementsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#update DatabasePluggableDatabasePluggabledatabasemanagementsManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#create DatabasePluggableDatabasePluggabledatabasemanagementsManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#delete DatabasePluggableDatabasePluggabledatabasemanagementsManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database_pluggabledatabasemanagements_management#update DatabasePluggableDatabasePluggabledatabasemanagementsManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.Initializer"></a>

```typescript
import { databasePluggableDatabasePluggabledatabasemanagementsManagement } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.get"></a>

```typescript
public get(index: number): DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.Initializer"></a>

```typescript
import { databasePluggableDatabasePluggabledatabasemanagementsManagement } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.allConnectionStrings">allConnectionStrings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.enablePluggabledatabasemanagement">enablePluggabledatabasemanagement</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.pdbDefault">pdbDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.pdbIpDefault">pdbIpDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings">DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allConnectionStrings`<sup>Required</sup> <a name="allConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.allConnectionStrings"></a>

```typescript
public readonly allConnectionStrings: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `enablePluggabledatabasemanagement`<sup>Required</sup> <a name="enablePluggabledatabasemanagement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.enablePluggabledatabasemanagement"></a>

```typescript
public readonly enablePluggabledatabasemanagement: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `pdbDefault`<sup>Required</sup> <a name="pdbDefault" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.pdbDefault"></a>

```typescript
public readonly pdbDefault: string;
```

- *Type:* string

---

##### `pdbIpDefault`<sup>Required</sup> <a name="pdbIpDefault" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.pdbIpDefault"></a>

```typescript
public readonly pdbIpDefault: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings">DatabasePluggableDatabasePluggabledatabasemanagementsManagementConnectionStrings</a>

---


### DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.Initializer"></a>

```typescript
import { databasePluggableDatabasePluggabledatabasemanagementsManagement } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.passwordSecretIdInput"></a>

```typescript
public readonly passwordSecretIdInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails">DatabasePluggableDatabasePluggabledatabasemanagementsManagementCredentialDetails</a>

---


### DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.Initializer"></a>

```typescript
import { databasePluggableDatabasePluggabledatabasemanagementsManagement } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.get"></a>

```typescript
public get(index: number): DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.Initializer"></a>

```typescript
import { databasePluggableDatabasePluggabledatabasemanagementsManagement } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.enablePluggabledatabasemanagement">enablePluggabledatabasemanagement</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.managementStatus">managementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig">DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enablePluggabledatabasemanagement`<sup>Required</sup> <a name="enablePluggabledatabasemanagement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.enablePluggabledatabasemanagement"></a>

```typescript
public readonly enablePluggabledatabasemanagement: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `managementStatus`<sup>Required</sup> <a name="managementStatus" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```typescript
public readonly managementStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig">DatabasePluggableDatabasePluggabledatabasemanagementsManagementPluggableDatabaseManagementConfig</a>

---


### DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference <a name="DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { databasePluggableDatabasePluggabledatabasemanagementsManagement } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasePluggabledatabasemanagementsManagement.DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts">DatabasePluggableDatabasePluggabledatabasemanagementsManagementTimeouts</a>

---



