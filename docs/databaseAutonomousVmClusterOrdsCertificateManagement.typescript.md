# `databaseAutonomousVmClusterOrdsCertificateManagement` Submodule <a name="`databaseAutonomousVmClusterOrdsCertificateManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousVmClusterOrdsCertificateManagement <a name="DatabaseAutonomousVmClusterOrdsCertificateManagement" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management oci_database_autonomous_vm_cluster_ords_certificate_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer"></a>

```typescript
import { databaseAutonomousVmClusterOrdsCertificateManagement } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement(scope: Construct, id: string, config: DatabaseAutonomousVmClusterOrdsCertificateManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig">DatabaseAutonomousVmClusterOrdsCertificateManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig">DatabaseAutonomousVmClusterOrdsCertificateManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCaBundleId">resetCaBundleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCertificateAuthorityId">resetCertificateAuthorityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a>

---

##### `resetCaBundleId` <a name="resetCaBundleId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCaBundleId"></a>

```typescript
public resetCaBundleId(): void
```

##### `resetCertificateAuthorityId` <a name="resetCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCertificateAuthorityId"></a>

```typescript
public resetCertificateAuthorityId(): void
```

##### `resetCertificateId` <a name="resetCertificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCertificateId"></a>

```typescript
public resetCertificateId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousVmClusterOrdsCertificateManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isConstruct"></a>

```typescript
import { databaseAutonomousVmClusterOrdsCertificateManagement } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformElement"></a>

```typescript
import { databaseAutonomousVmClusterOrdsCertificateManagement } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformResource"></a>

```typescript
import { databaseAutonomousVmClusterOrdsCertificateManagement } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport"></a>

```typescript
import { databaseAutonomousVmClusterOrdsCertificateManagement } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseAutonomousVmClusterOrdsCertificateManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseAutonomousVmClusterOrdsCertificateManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseAutonomousVmClusterOrdsCertificateManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousVmClusterOrdsCertificateManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.autonomousVmClusterIdInput">autonomousVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.caBundleIdInput">caBundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateAuthorityIdInput">certificateAuthorityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateGenerationTypeInput">certificateGenerationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.autonomousVmClusterId">autonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.caBundleId">caBundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateGenerationType">certificateGenerationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference</a>

---

##### `autonomousVmClusterIdInput`<sup>Optional</sup> <a name="autonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.autonomousVmClusterIdInput"></a>

```typescript
public readonly autonomousVmClusterIdInput: string;
```

- *Type:* string

---

##### `caBundleIdInput`<sup>Optional</sup> <a name="caBundleIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.caBundleIdInput"></a>

```typescript
public readonly caBundleIdInput: string;
```

- *Type:* string

---

##### `certificateAuthorityIdInput`<sup>Optional</sup> <a name="certificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateAuthorityIdInput"></a>

```typescript
public readonly certificateAuthorityIdInput: string;
```

- *Type:* string

---

##### `certificateGenerationTypeInput`<sup>Optional</sup> <a name="certificateGenerationTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateGenerationTypeInput"></a>

```typescript
public readonly certificateGenerationTypeInput: string;
```

- *Type:* string

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a>

---

##### `autonomousVmClusterId`<sup>Required</sup> <a name="autonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.autonomousVmClusterId"></a>

```typescript
public readonly autonomousVmClusterId: string;
```

- *Type:* string

---

##### `caBundleId`<sup>Required</sup> <a name="caBundleId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.caBundleId"></a>

```typescript
public readonly caBundleId: string;
```

- *Type:* string

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateAuthorityId"></a>

```typescript
public readonly certificateAuthorityId: string;
```

- *Type:* string

---

##### `certificateGenerationType`<sup>Required</sup> <a name="certificateGenerationType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateGenerationType"></a>

```typescript
public readonly certificateGenerationType: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousVmClusterOrdsCertificateManagementConfig <a name="DatabaseAutonomousVmClusterOrdsCertificateManagementConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.Initializer"></a>

```typescript
import { databaseAutonomousVmClusterOrdsCertificateManagement } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousVmClusterOrdsCertificateManagementConfig: databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.autonomousVmClusterId">autonomousVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#autonomous_vm_cluster_id DatabaseAutonomousVmClusterOrdsCertificateManagement#autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateGenerationType">certificateGenerationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_generation_type DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_generation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.caBundleId">caBundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#ca_bundle_id DatabaseAutonomousVmClusterOrdsCertificateManagement#ca_bundle_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_authority_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateId">certificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#id DatabaseAutonomousVmClusterOrdsCertificateManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousVmClusterId`<sup>Required</sup> <a name="autonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.autonomousVmClusterId"></a>

```typescript
public readonly autonomousVmClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#autonomous_vm_cluster_id DatabaseAutonomousVmClusterOrdsCertificateManagement#autonomous_vm_cluster_id}.

---

##### `certificateGenerationType`<sup>Required</sup> <a name="certificateGenerationType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateGenerationType"></a>

```typescript
public readonly certificateGenerationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_generation_type DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_generation_type}.

---

##### `caBundleId`<sup>Optional</sup> <a name="caBundleId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.caBundleId"></a>

```typescript
public readonly caBundleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#ca_bundle_id DatabaseAutonomousVmClusterOrdsCertificateManagement#ca_bundle_id}.

---

##### `certificateAuthorityId`<sup>Optional</sup> <a name="certificateAuthorityId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateAuthorityId"></a>

```typescript
public readonly certificateAuthorityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_authority_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_authority_id}.

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#id DatabaseAutonomousVmClusterOrdsCertificateManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#timeouts DatabaseAutonomousVmClusterOrdsCertificateManagement#timeouts}

---

### DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts <a name="DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.Initializer"></a>

```typescript
import { databaseAutonomousVmClusterOrdsCertificateManagement } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousVmClusterOrdsCertificateManagementTimeouts: databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#create DatabaseAutonomousVmClusterOrdsCertificateManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#delete DatabaseAutonomousVmClusterOrdsCertificateManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#update DatabaseAutonomousVmClusterOrdsCertificateManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#create DatabaseAutonomousVmClusterOrdsCertificateManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#delete DatabaseAutonomousVmClusterOrdsCertificateManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#update DatabaseAutonomousVmClusterOrdsCertificateManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference <a name="DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousVmClusterOrdsCertificateManagement } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a>

---



