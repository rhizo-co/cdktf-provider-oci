# `databaseManagementExternalExadataInfrastructureExadataManagement` Submodule <a name="`databaseManagementExternalExadataInfrastructureExadataManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalExadataInfrastructureExadataManagement <a name="DatabaseManagementExternalExadataInfrastructureExadataManagement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management oci_database_management_external_exadata_infrastructure_exadata_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer"></a>

```typescript
import { databaseManagementExternalExadataInfrastructureExadataManagement } from 'rhizo-co-terraform-provider-oci'

new databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement(scope: Construct, id: string, config: DatabaseManagementExternalExadataInfrastructureExadataManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig">DatabaseManagementExternalExadataInfrastructureExadataManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig">DatabaseManagementExternalExadataInfrastructureExadataManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.resetLicenseModel"></a>

```typescript
public resetLicenseModel(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalExadataInfrastructureExadataManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isConstruct"></a>

```typescript
import { databaseManagementExternalExadataInfrastructureExadataManagement } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isTerraformElement"></a>

```typescript
import { databaseManagementExternalExadataInfrastructureExadataManagement } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isTerraformResource"></a>

```typescript
import { databaseManagementExternalExadataInfrastructureExadataManagement } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.generateConfigForImport"></a>

```typescript
import { databaseManagementExternalExadataInfrastructureExadataManagement } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseManagementExternalExadataInfrastructureExadataManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseManagementExternalExadataInfrastructureExadataManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseManagementExternalExadataInfrastructureExadataManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalExadataInfrastructureExadataManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.enableExadataInput">enableExadataInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.externalExadataInfrastructureIdInput">externalExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.licenseModelInput">licenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.enableExadata">enableExadata</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.externalExadataInfrastructureId">externalExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference</a>

---

##### `enableExadataInput`<sup>Optional</sup> <a name="enableExadataInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.enableExadataInput"></a>

```typescript
public readonly enableExadataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalExadataInfrastructureIdInput`<sup>Optional</sup> <a name="externalExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.externalExadataInfrastructureIdInput"></a>

```typescript
public readonly externalExadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.licenseModelInput"></a>

```typescript
public readonly licenseModelInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts</a>

---

##### `enableExadata`<sup>Required</sup> <a name="enableExadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.enableExadata"></a>

```typescript
public readonly enableExadata: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalExadataInfrastructureId`<sup>Required</sup> <a name="externalExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.externalExadataInfrastructureId"></a>

```typescript
public readonly externalExadataInfrastructureId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalExadataInfrastructureExadataManagementConfig <a name="DatabaseManagementExternalExadataInfrastructureExadataManagementConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.Initializer"></a>

```typescript
import { databaseManagementExternalExadataInfrastructureExadataManagement } from 'rhizo-co-terraform-provider-oci'

const databaseManagementExternalExadataInfrastructureExadataManagementConfig: databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.enableExadata">enableExadata</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#enable_exadata DatabaseManagementExternalExadataInfrastructureExadataManagement#enable_exadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.externalExadataInfrastructureId">externalExadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#external_exadata_infrastructure_id DatabaseManagementExternalExadataInfrastructureExadataManagement#external_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#id DatabaseManagementExternalExadataInfrastructureExadataManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.licenseModel">licenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#license_model DatabaseManagementExternalExadataInfrastructureExadataManagement#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enableExadata`<sup>Required</sup> <a name="enableExadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.enableExadata"></a>

```typescript
public readonly enableExadata: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#enable_exadata DatabaseManagementExternalExadataInfrastructureExadataManagement#enable_exadata}.

---

##### `externalExadataInfrastructureId`<sup>Required</sup> <a name="externalExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.externalExadataInfrastructureId"></a>

```typescript
public readonly externalExadataInfrastructureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#external_exadata_infrastructure_id DatabaseManagementExternalExadataInfrastructureExadataManagement#external_exadata_infrastructure_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#id DatabaseManagementExternalExadataInfrastructureExadataManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#license_model DatabaseManagementExternalExadataInfrastructureExadataManagement#license_model}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#timeouts DatabaseManagementExternalExadataInfrastructureExadataManagement#timeouts}

---

### DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts <a name="DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts.Initializer"></a>

```typescript
import { databaseManagementExternalExadataInfrastructureExadataManagement } from 'rhizo-co-terraform-provider-oci'

const databaseManagementExternalExadataInfrastructureExadataManagementTimeouts: databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#create DatabaseManagementExternalExadataInfrastructureExadataManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#delete DatabaseManagementExternalExadataInfrastructureExadataManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#update DatabaseManagementExternalExadataInfrastructureExadataManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#create DatabaseManagementExternalExadataInfrastructureExadataManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#delete DatabaseManagementExternalExadataInfrastructureExadataManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#update DatabaseManagementExternalExadataInfrastructureExadataManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference <a name="DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseManagementExternalExadataInfrastructureExadataManagement } from 'rhizo-co-terraform-provider-oci'

new databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts</a>

---



