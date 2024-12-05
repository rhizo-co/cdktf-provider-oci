# `osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement` Submodule <a name="`osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement <a name="OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management oci_os_management_hub_managed_instance_group_attach_software_sources_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement(scope: Construct, id: string, config: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.putWorkRequestDetails">putWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.resetWorkRequestDetails">resetWorkRequestDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts</a>

---

##### `putWorkRequestDetails` <a name="putWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.putWorkRequestDetails"></a>

```typescript
public putWorkRequestDetails(value: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkRequestDetails` <a name="resetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.resetWorkRequestDetails"></a>

```typescript
public resetWorkRequestDetails(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isConstruct"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isTerraformElement"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isTerraformResource"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.generateConfigForImport"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.managedInstanceGroupIdInput">managedInstanceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.softwareSourcesInput">softwareSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.workRequestDetailsInput">workRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.softwareSources">softwareSources</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference</a>

---

##### `workRequestDetails`<sup>Required</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.workRequestDetails"></a>

```typescript
public readonly workRequestDetails: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceGroupIdInput`<sup>Optional</sup> <a name="managedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.managedInstanceGroupIdInput"></a>

```typescript
public readonly managedInstanceGroupIdInput: string;
```

- *Type:* string

---

##### `softwareSourcesInput`<sup>Optional</sup> <a name="softwareSourcesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.softwareSourcesInput"></a>

```typescript
public readonly softwareSourcesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts</a>

---

##### `workRequestDetailsInput`<sup>Optional</sup> <a name="workRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.workRequestDetailsInput"></a>

```typescript
public readonly workRequestDetailsInput: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

---

##### `softwareSources`<sup>Required</sup> <a name="softwareSources" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.softwareSources"></a>

```typescript
public readonly softwareSources: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig <a name="OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig: osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#managed_instance_group_id OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.softwareSources">softwareSources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#software_sources OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#software_sources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#id OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#managed_instance_group_id OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#managed_instance_group_id}.

---

##### `softwareSources`<sup>Required</sup> <a name="softwareSources" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.softwareSources"></a>

```typescript
public readonly softwareSources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#software_sources OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#software_sources}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#id OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#timeouts OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#timeouts}

---

##### `workRequestDetails`<sup>Optional</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.workRequestDetails"></a>

```typescript
public readonly workRequestDetails: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#work_request_details OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#work_request_details}

---

### OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts <a name="OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts: osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#create OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#delete OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#update OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#create OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#delete OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#update OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#update}.

---

### OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails: osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#description OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#display_name OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#display_name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#description OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#display_name OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts</a>

---


### OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails</a>

---



