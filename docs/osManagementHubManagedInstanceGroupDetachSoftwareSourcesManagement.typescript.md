# `osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement` Submodule <a name="`osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement <a name="OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management oci_os_management_hub_managed_instance_group_detach_software_sources_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement(scope: Construct, id: string, config: OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.putWorkRequestDetails">putWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.resetWorkRequestDetails">resetWorkRequestDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts</a>

---

##### `putWorkRequestDetails` <a name="putWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.putWorkRequestDetails"></a>

```typescript
public putWorkRequestDetails(value: OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkRequestDetails` <a name="resetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.resetWorkRequestDetails"></a>

```typescript
public resetWorkRequestDetails(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isConstruct"></a>

```typescript
import { osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isTerraformElement"></a>

```typescript
import { osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isTerraformResource"></a>

```typescript
import { osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.generateConfigForImport"></a>

```typescript
import { osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.managedInstanceGroupIdInput">managedInstanceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.softwareSourcesInput">softwareSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.workRequestDetailsInput">workRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.softwareSources">softwareSources</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference</a>

---

##### `workRequestDetails`<sup>Required</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.workRequestDetails"></a>

```typescript
public readonly workRequestDetails: OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceGroupIdInput`<sup>Optional</sup> <a name="managedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.managedInstanceGroupIdInput"></a>

```typescript
public readonly managedInstanceGroupIdInput: string;
```

- *Type:* string

---

##### `softwareSourcesInput`<sup>Optional</sup> <a name="softwareSourcesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.softwareSourcesInput"></a>

```typescript
public readonly softwareSourcesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts</a>

---

##### `workRequestDetailsInput`<sup>Optional</sup> <a name="workRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.workRequestDetailsInput"></a>

```typescript
public readonly workRequestDetailsInput: OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

---

##### `softwareSources`<sup>Required</sup> <a name="softwareSources" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.softwareSources"></a>

```typescript
public readonly softwareSources: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig <a name="OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig: osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#managed_instance_group_id OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.softwareSources">softwareSources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#software_sources OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#software_sources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#id OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#managed_instance_group_id OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#managed_instance_group_id}.

---

##### `softwareSources`<sup>Required</sup> <a name="softwareSources" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.softwareSources"></a>

```typescript
public readonly softwareSources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#software_sources OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#software_sources}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#id OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#timeouts OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#timeouts}

---

##### `workRequestDetails`<sup>Optional</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementConfig.property.workRequestDetails"></a>

```typescript
public readonly workRequestDetails: OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#work_request_details OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#work_request_details}

---

### OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts <a name="OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts: osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#create OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#delete OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#update OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#create OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#delete OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#update OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#update}.

---

### OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails: osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#description OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#display_name OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#display_name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#description OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_software_sources_management#display_name OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementTimeouts</a>

---


### OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupDetachSoftwareSourcesManagementWorkRequestDetails</a>

---



