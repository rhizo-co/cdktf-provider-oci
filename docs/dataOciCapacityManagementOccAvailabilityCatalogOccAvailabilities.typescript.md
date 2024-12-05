# `dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities` Submodule <a name="`dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities oci_capacity_management_occ_availability_catalog_occ_availabilities}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities(scope: Construct, id: string, config: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetDateExpectedCapacityHandover">resetDateExpectedCapacityHandover</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetResourceName">resetResourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetWorkloadType">resetWorkloadType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>[]

---

##### `resetDateExpectedCapacityHandover` <a name="resetDateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetDateExpectedCapacityHandover"></a>

```typescript
public resetDateExpectedCapacityHandover(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceName` <a name="resetResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetResourceName"></a>

```typescript
public resetResourceName(): void
```

##### `resetResourceType` <a name="resetResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetWorkloadType` <a name="resetWorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetWorkloadType"></a>

```typescript
public resetWorkloadType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isConstruct"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isTerraformElement"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isTerraformDataSource"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.generateConfigForImport"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.occAvailabilityCollection">occAvailabilityCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.dateExpectedCapacityHandoverInput">dateExpectedCapacityHandoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.occAvailabilityCatalogIdInput">occAvailabilityCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.resourceNameInput">resourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.workloadTypeInput">workloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.dateExpectedCapacityHandover">dateExpectedCapacityHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.occAvailabilityCatalogId">occAvailabilityCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.workloadType">workloadType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.filter"></a>

```typescript
public readonly filter: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList</a>

---

##### `occAvailabilityCollection`<sup>Required</sup> <a name="occAvailabilityCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.occAvailabilityCollection"></a>

```typescript
public readonly occAvailabilityCollection: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList</a>

---

##### `dateExpectedCapacityHandoverInput`<sup>Optional</sup> <a name="dateExpectedCapacityHandoverInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.dateExpectedCapacityHandoverInput"></a>

```typescript
public readonly dateExpectedCapacityHandoverInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `occAvailabilityCatalogIdInput`<sup>Optional</sup> <a name="occAvailabilityCatalogIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.occAvailabilityCatalogIdInput"></a>

```typescript
public readonly occAvailabilityCatalogIdInput: string;
```

- *Type:* string

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.resourceNameInput"></a>

```typescript
public readonly resourceNameInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `workloadTypeInput`<sup>Optional</sup> <a name="workloadTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.workloadTypeInput"></a>

```typescript
public readonly workloadTypeInput: string;
```

- *Type:* string

---

##### `dateExpectedCapacityHandover`<sup>Required</sup> <a name="dateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.dateExpectedCapacityHandover"></a>

```typescript
public readonly dateExpectedCapacityHandover: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `occAvailabilityCatalogId`<sup>Required</sup> <a name="occAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.occAvailabilityCatalogId"></a>

```typescript
public readonly occAvailabilityCatalogId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig: dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.occAvailabilityCatalogId">occAvailabilityCatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#occ_availability_catalog_id DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#occ_availability_catalog_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.dateExpectedCapacityHandover">dateExpectedCapacityHandover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#date_expected_capacity_handover DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#date_expected_capacity_handover}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#id DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.resourceName">resourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#resource_name DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#resource_type DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.workloadType">workloadType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#workload_type DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#workload_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `occAvailabilityCatalogId`<sup>Required</sup> <a name="occAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.occAvailabilityCatalogId"></a>

```typescript
public readonly occAvailabilityCatalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#occ_availability_catalog_id DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#occ_availability_catalog_id}.

---

##### `dateExpectedCapacityHandover`<sup>Optional</sup> <a name="dateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.dateExpectedCapacityHandover"></a>

```typescript
public readonly dateExpectedCapacityHandover: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#date_expected_capacity_handover DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#date_expected_capacity_handover}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#filter DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#id DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#resource_name DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#resource_name}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#resource_type DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#resource_type}.

---

##### `workloadType`<sup>Optional</sup> <a name="workloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#workload_type DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#workload_type}.

---

### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter: dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#name DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#values DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#regex DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#name DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#values DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#regex DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#regex}.

---

### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection: dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection = { ... }
```


### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems: dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>[]

---


### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>

---


### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.availableQuantity">availableQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.dateExpectedCapacityHandover">dateExpectedCapacityHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.dateFinalCustomerOrder">dateFinalCustomerOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.demandedQuantity">demandedQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.totalAvailableQuantity">totalAvailableQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.workloadType">workloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableQuantity`<sup>Required</sup> <a name="availableQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.availableQuantity"></a>

```typescript
public readonly availableQuantity: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `dateExpectedCapacityHandover`<sup>Required</sup> <a name="dateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.dateExpectedCapacityHandover"></a>

```typescript
public readonly dateExpectedCapacityHandover: string;
```

- *Type:* string

---

##### `dateFinalCustomerOrder`<sup>Required</sup> <a name="dateFinalCustomerOrder" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.dateFinalCustomerOrder"></a>

```typescript
public readonly dateFinalCustomerOrder: string;
```

- *Type:* string

---

##### `demandedQuantity`<sup>Required</sup> <a name="demandedQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.demandedQuantity"></a>

```typescript
public readonly demandedQuantity: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `totalAvailableQuantity`<sup>Required</sup> <a name="totalAvailableQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.totalAvailableQuantity"></a>

```typescript
public readonly totalAvailableQuantity: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems</a>

---


### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection</a>

---



