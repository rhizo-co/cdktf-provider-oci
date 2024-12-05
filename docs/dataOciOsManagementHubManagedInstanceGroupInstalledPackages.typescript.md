# `dataOciOsManagementHubManagedInstanceGroupInstalledPackages` Submodule <a name="`dataOciOsManagementHubManagedInstanceGroupInstalledPackages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceGroupInstalledPackages <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages oci_os_management_hub_managed_instance_group_installed_packages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupInstalledPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages(scope: Construct, id: string, config: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetTimeInstallDateEnd">resetTimeInstallDateEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetTimeInstallDateStart">resetTimeInstallDateStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetDisplayNameContains"></a>

```typescript
public resetDisplayNameContains(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeInstallDateEnd` <a name="resetTimeInstallDateEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetTimeInstallDateEnd"></a>

```typescript
public resetTimeInstallDateEnd(): void
```

##### `resetTimeInstallDateStart` <a name="resetTimeInstallDateStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetTimeInstallDateStart"></a>

```typescript
public resetTimeInstallDateStart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupInstalledPackages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isConstruct"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupInstalledPackages } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformElement"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupInstalledPackages } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformDataSource"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupInstalledPackages } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupInstalledPackages } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupInstalledPackages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceGroupInstalledPackages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubManagedInstanceGroupInstalledPackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceGroupInstalledPackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupInstalledPackageCollection">managedInstanceGroupInstalledPackageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameInput">displayNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupIdInput">managedInstanceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateEndInput">timeInstallDateEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateStartInput">timeInstallDateStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayName">displayName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateEnd">timeInstallDateEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateStart">timeInstallDateStart</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.filter"></a>

```typescript
public readonly filter: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList</a>

---

##### `managedInstanceGroupInstalledPackageCollection`<sup>Required</sup> <a name="managedInstanceGroupInstalledPackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupInstalledPackageCollection"></a>

```typescript
public readonly managedInstanceGroupInstalledPackageCollection: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameContainsInput"></a>

```typescript
public readonly displayNameContainsInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceGroupIdInput`<sup>Optional</sup> <a name="managedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupIdInput"></a>

```typescript
public readonly managedInstanceGroupIdInput: string;
```

- *Type:* string

---

##### `timeInstallDateEndInput`<sup>Optional</sup> <a name="timeInstallDateEndInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateEndInput"></a>

```typescript
public readonly timeInstallDateEndInput: string;
```

- *Type:* string

---

##### `timeInstallDateStartInput`<sup>Optional</sup> <a name="timeInstallDateStartInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateStartInput"></a>

```typescript
public readonly timeInstallDateStartInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayName"></a>

```typescript
public readonly displayName: string[];
```

- *Type:* string[]

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

---

##### `timeInstallDateEnd`<sup>Required</sup> <a name="timeInstallDateEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateEnd"></a>

```typescript
public readonly timeInstallDateEnd: string;
```

- *Type:* string

---

##### `timeInstallDateStart`<sup>Required</sup> <a name="timeInstallDateStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateStart"></a>

```typescript
public readonly timeInstallDateStart: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupInstalledPackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig: dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.displayName">displayName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.timeInstallDateEnd">timeInstallDateEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.timeInstallDateStart">timeInstallDateStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#managed_instance_group_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.displayName"></a>

```typescript
public readonly displayName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#filter DataOciOsManagementHubManagedInstanceGroupInstalledPackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeInstallDateEnd`<sup>Optional</sup> <a name="timeInstallDateEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.timeInstallDateEnd"></a>

```typescript
public readonly timeInstallDateEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_end}.

---

##### `timeInstallDateStart`<sup>Optional</sup> <a name="timeInstallDateStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.timeInstallDateStart"></a>

```typescript
public readonly timeInstallDateStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_start}.

---

### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupInstalledPackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter: dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#values DataOciOsManagementHubManagedInstanceGroupInstalledPackages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#regex DataOciOsManagementHubManagedInstanceGroupInstalledPackages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#values DataOciOsManagementHubManagedInstanceGroupInstalledPackages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#regex DataOciOsManagementHubManagedInstanceGroupInstalledPackages#regex}.

---

### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupInstalledPackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection: dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection = { ... }
```


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupInstalledPackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems: dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupInstalledPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>[]

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupInstalledPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter</a>

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupInstalledPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupInstalledPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupInstalledPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceGroupInstalledPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection</a>

---



