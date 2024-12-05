# `osManagementHubSoftwareSourceAddPackagesManagement` Submodule <a name="`osManagementHubSoftwareSourceAddPackagesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubSoftwareSourceAddPackagesManagement <a name="OsManagementHubSoftwareSourceAddPackagesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_add_packages_management oci_os_management_hub_software_source_add_packages_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.Initializer"></a>

```typescript
import { osManagementHubSoftwareSourceAddPackagesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement(scope: Construct, id: string, config: OsManagementHubSoftwareSourceAddPackagesManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig">OsManagementHubSoftwareSourceAddPackagesManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig">OsManagementHubSoftwareSourceAddPackagesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: OsManagementHubSoftwareSourceAddPackagesManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeouts">OsManagementHubSoftwareSourceAddPackagesManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubSoftwareSourceAddPackagesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.isConstruct"></a>

```typescript
import { osManagementHubSoftwareSourceAddPackagesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.isTerraformElement"></a>

```typescript
import { osManagementHubSoftwareSourceAddPackagesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.isTerraformResource"></a>

```typescript
import { osManagementHubSoftwareSourceAddPackagesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.generateConfigForImport"></a>

```typescript
import { osManagementHubSoftwareSourceAddPackagesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OsManagementHubSoftwareSourceAddPackagesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubSoftwareSourceAddPackagesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubSoftwareSourceAddPackagesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_add_packages_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubSoftwareSourceAddPackagesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference">OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.packagesInput">packagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeouts">OsManagementHubSoftwareSourceAddPackagesManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.packages">packages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference">OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `packagesInput`<sup>Optional</sup> <a name="packagesInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.packagesInput"></a>

```typescript
public readonly packagesInput: string[];
```

- *Type:* string[]

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.softwareSourceIdInput"></a>

```typescript
public readonly softwareSourceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OsManagementHubSoftwareSourceAddPackagesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeouts">OsManagementHubSoftwareSourceAddPackagesManagementTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `packages`<sup>Required</sup> <a name="packages" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.packages"></a>

```typescript
public readonly packages: string[];
```

- *Type:* string[]

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubSoftwareSourceAddPackagesManagementConfig <a name="OsManagementHubSoftwareSourceAddPackagesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.Initializer"></a>

```typescript
import { osManagementHubSoftwareSourceAddPackagesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubSoftwareSourceAddPackagesManagementConfig: osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.packages">packages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_add_packages_management#packages OsManagementHubSoftwareSourceAddPackagesManagement#packages}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_add_packages_management#software_source_id OsManagementHubSoftwareSourceAddPackagesManagement#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_add_packages_management#id OsManagementHubSoftwareSourceAddPackagesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeouts">OsManagementHubSoftwareSourceAddPackagesManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `packages`<sup>Required</sup> <a name="packages" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.packages"></a>

```typescript
public readonly packages: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_add_packages_management#packages OsManagementHubSoftwareSourceAddPackagesManagement#packages}.

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_add_packages_management#software_source_id OsManagementHubSoftwareSourceAddPackagesManagement#software_source_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_add_packages_management#id OsManagementHubSoftwareSourceAddPackagesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubSoftwareSourceAddPackagesManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeouts">OsManagementHubSoftwareSourceAddPackagesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_add_packages_management#timeouts OsManagementHubSoftwareSourceAddPackagesManagement#timeouts}

---

### OsManagementHubSoftwareSourceAddPackagesManagementTimeouts <a name="OsManagementHubSoftwareSourceAddPackagesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeouts.Initializer"></a>

```typescript
import { osManagementHubSoftwareSourceAddPackagesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubSoftwareSourceAddPackagesManagementTimeouts: osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_add_packages_management#create OsManagementHubSoftwareSourceAddPackagesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_add_packages_management#delete OsManagementHubSoftwareSourceAddPackagesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_add_packages_management#update OsManagementHubSoftwareSourceAddPackagesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_add_packages_management#create OsManagementHubSoftwareSourceAddPackagesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_add_packages_management#delete OsManagementHubSoftwareSourceAddPackagesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_add_packages_management#update OsManagementHubSoftwareSourceAddPackagesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference <a name="OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { osManagementHubSoftwareSourceAddPackagesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeouts">OsManagementHubSoftwareSourceAddPackagesManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubSoftwareSourceAddPackagesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceAddPackagesManagement.OsManagementHubSoftwareSourceAddPackagesManagementTimeouts">OsManagementHubSoftwareSourceAddPackagesManagementTimeouts</a>

---



