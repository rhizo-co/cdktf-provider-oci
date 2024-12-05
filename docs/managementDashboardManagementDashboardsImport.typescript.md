# `managementDashboardManagementDashboardsImport` Submodule <a name="`managementDashboardManagementDashboardsImport` Submodule" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementDashboardManagementDashboardsImport <a name="ManagementDashboardManagementDashboardsImport" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import oci_management_dashboard_management_dashboards_import}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer"></a>

```typescript
import { managementDashboardManagementDashboardsImport } from 'rhizo-co-terraform-provider-oci'

new managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport(scope: Construct, id: string, config?: ManagementDashboardManagementDashboardsImportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig">ManagementDashboardManagementDashboardsImportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig">ManagementDashboardManagementDashboardsImportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetImportDetails">resetImportDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetImportDetailsFile">resetImportDetailsFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.putTimeouts"></a>

```typescript
public putTimeouts(value: ManagementDashboardManagementDashboardsImportTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts">ManagementDashboardManagementDashboardsImportTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImportDetails` <a name="resetImportDetails" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetImportDetails"></a>

```typescript
public resetImportDetails(): void
```

##### `resetImportDetailsFile` <a name="resetImportDetailsFile" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetImportDetailsFile"></a>

```typescript
public resetImportDetailsFile(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagementDashboardManagementDashboardsImport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isConstruct"></a>

```typescript
import { managementDashboardManagementDashboardsImport } from 'rhizo-co-terraform-provider-oci'

managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformElement"></a>

```typescript
import { managementDashboardManagementDashboardsImport } from 'rhizo-co-terraform-provider-oci'

managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformResource"></a>

```typescript
import { managementDashboardManagementDashboardsImport } from 'rhizo-co-terraform-provider-oci'

managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport"></a>

```typescript
import { managementDashboardManagementDashboardsImport } from 'rhizo-co-terraform-provider-oci'

managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ManagementDashboardManagementDashboardsImport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagementDashboardManagementDashboardsImport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagementDashboardManagementDashboardsImport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagementDashboardManagementDashboardsImport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference">ManagementDashboardManagementDashboardsImportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetailsFileInput">importDetailsFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetailsInput">importDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts">ManagementDashboardManagementDashboardsImportTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetails">importDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetailsFile">importDetailsFile</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.timeouts"></a>

```typescript
public readonly timeouts: ManagementDashboardManagementDashboardsImportTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference">ManagementDashboardManagementDashboardsImportTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importDetailsFileInput`<sup>Optional</sup> <a name="importDetailsFileInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetailsFileInput"></a>

```typescript
public readonly importDetailsFileInput: string;
```

- *Type:* string

---

##### `importDetailsInput`<sup>Optional</sup> <a name="importDetailsInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetailsInput"></a>

```typescript
public readonly importDetailsInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ManagementDashboardManagementDashboardsImportTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts">ManagementDashboardManagementDashboardsImportTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importDetails`<sup>Required</sup> <a name="importDetails" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetails"></a>

```typescript
public readonly importDetails: string;
```

- *Type:* string

---

##### `importDetailsFile`<sup>Required</sup> <a name="importDetailsFile" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.importDetailsFile"></a>

```typescript
public readonly importDetailsFile: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementDashboardManagementDashboardsImportConfig <a name="ManagementDashboardManagementDashboardsImportConfig" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.Initializer"></a>

```typescript
import { managementDashboardManagementDashboardsImport } from 'rhizo-co-terraform-provider-oci'

const managementDashboardManagementDashboardsImportConfig: managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#id ManagementDashboardManagementDashboardsImport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.importDetails">importDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#import_details ManagementDashboardManagementDashboardsImport#import_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.importDetailsFile">importDetailsFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#import_details_file ManagementDashboardManagementDashboardsImport#import_details_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts">ManagementDashboardManagementDashboardsImportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#id ManagementDashboardManagementDashboardsImport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importDetails`<sup>Optional</sup> <a name="importDetails" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.importDetails"></a>

```typescript
public readonly importDetails: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#import_details ManagementDashboardManagementDashboardsImport#import_details}.

---

##### `importDetailsFile`<sup>Optional</sup> <a name="importDetailsFile" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.importDetailsFile"></a>

```typescript
public readonly importDetailsFile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#import_details_file ManagementDashboardManagementDashboardsImport#import_details_file}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ManagementDashboardManagementDashboardsImportTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts">ManagementDashboardManagementDashboardsImportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#timeouts ManagementDashboardManagementDashboardsImport#timeouts}

---

### ManagementDashboardManagementDashboardsImportTimeouts <a name="ManagementDashboardManagementDashboardsImportTimeouts" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.Initializer"></a>

```typescript
import { managementDashboardManagementDashboardsImport } from 'rhizo-co-terraform-provider-oci'

const managementDashboardManagementDashboardsImportTimeouts: managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#create ManagementDashboardManagementDashboardsImport#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#delete ManagementDashboardManagementDashboardsImport#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#update ManagementDashboardManagementDashboardsImport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#create ManagementDashboardManagementDashboardsImport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#delete ManagementDashboardManagementDashboardsImport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_dashboard_management_dashboards_import#update ManagementDashboardManagementDashboardsImport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementDashboardManagementDashboardsImportTimeoutsOutputReference <a name="ManagementDashboardManagementDashboardsImportTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.Initializer"></a>

```typescript
import { managementDashboardManagementDashboardsImport } from 'rhizo-co-terraform-provider-oci'

new managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts">ManagementDashboardManagementDashboardsImportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagementDashboardManagementDashboardsImportTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.managementDashboardManagementDashboardsImport.ManagementDashboardManagementDashboardsImportTimeouts">ManagementDashboardManagementDashboardsImportTimeouts</a>

---



