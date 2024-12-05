# `dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources` Submodule <a name="`dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources oci_os_management_hub_managed_instance_group_available_software_sources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources(scope: Construct, id: string, config: DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetDisplayNameContains"></a>

```typescript
public resetDisplayNameContains(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isConstruct"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isTerraformElement"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isTerraformDataSource"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.generateConfigForImport"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.availableSoftwareSourceCollection">availableSoftwareSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.displayNameInput">displayNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.managedInstanceGroupIdInput">managedInstanceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.displayName">displayName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availableSoftwareSourceCollection`<sup>Required</sup> <a name="availableSoftwareSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.availableSoftwareSourceCollection"></a>

```typescript
public readonly availableSoftwareSourceCollection: DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.filter"></a>

```typescript
public readonly filter: DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.displayNameContainsInput"></a>

```typescript
public readonly displayNameContainsInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceGroupIdInput`<sup>Optional</sup> <a name="managedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.managedInstanceGroupIdInput"></a>

```typescript
public readonly managedInstanceGroupIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.displayName"></a>

```typescript
public readonly displayName: string[];
```

- *Type:* string[]

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection: dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection = { ... }
```


### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems: dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems = { ... }
```


### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig: dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#compartment_id DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.displayName">displayName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#display_name DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#display_name_contains DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#id DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#managed_instance_group_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#compartment_id DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.displayName"></a>

```typescript
public readonly displayName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#display_name DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#display_name_contains DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#filter DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#id DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter: dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#name DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#values DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#regex DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#name DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#values DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_software_sources#regex DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesAvailableSoftwareSourceCollection</a>

---


### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>[]

---


### DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSources.DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter">DataOciOsManagementHubManagedInstanceGroupAvailableSoftwareSourcesFilter</a>

---



