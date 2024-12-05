# `dataOciOsManagementHubManagedInstanceInstalledPackages` Submodule <a name="`dataOciOsManagementHubManagedInstanceInstalledPackages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceInstalledPackages <a name="DataOciOsManagementHubManagedInstanceInstalledPackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages oci_os_management_hub_managed_instance_installed_packages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages(scope: Construct, id: string, config: DataOciOsManagementHubManagedInstanceInstalledPackagesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig">DataOciOsManagementHubManagedInstanceInstalledPackagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig">DataOciOsManagementHubManagedInstanceInstalledPackagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetTimeInstallDateEnd">resetTimeInstallDateEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetTimeInstallDateStart">resetTimeInstallDateStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsManagementHubManagedInstanceInstalledPackagesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetDisplayNameContains"></a>

```typescript
public resetDisplayNameContains(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeInstallDateEnd` <a name="resetTimeInstallDateEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetTimeInstallDateEnd"></a>

```typescript
public resetTimeInstallDateEnd(): void
```

##### `resetTimeInstallDateStart` <a name="resetTimeInstallDateStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetTimeInstallDateStart"></a>

```typescript
public resetTimeInstallDateStart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceInstalledPackages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isConstruct"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledPackages } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformElement"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledPackages } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformDataSource"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledPackages } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledPackages } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceInstalledPackages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceInstalledPackages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubManagedInstanceInstalledPackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceInstalledPackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList">DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.installedPackageCollection">installedPackageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayNameInput">displayNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateEndInput">timeInstallDateEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateStartInput">timeInstallDateStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayName">displayName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateEnd">timeInstallDateEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateStart">timeInstallDateStart</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.filter"></a>

```typescript
public readonly filter: DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList">DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList</a>

---

##### `installedPackageCollection`<sup>Required</sup> <a name="installedPackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.installedPackageCollection"></a>

```typescript
public readonly installedPackageCollection: DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayNameContainsInput"></a>

```typescript
public readonly displayNameContainsInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsManagementHubManagedInstanceInstalledPackagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.managedInstanceIdInput"></a>

```typescript
public readonly managedInstanceIdInput: string;
```

- *Type:* string

---

##### `timeInstallDateEndInput`<sup>Optional</sup> <a name="timeInstallDateEndInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateEndInput"></a>

```typescript
public readonly timeInstallDateEndInput: string;
```

- *Type:* string

---

##### `timeInstallDateStartInput`<sup>Optional</sup> <a name="timeInstallDateStartInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateStartInput"></a>

```typescript
public readonly timeInstallDateStartInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayName"></a>

```typescript
public readonly displayName: string[];
```

- *Type:* string[]

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `timeInstallDateEnd`<sup>Required</sup> <a name="timeInstallDateEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateEnd"></a>

```typescript
public readonly timeInstallDateEnd: string;
```

- *Type:* string

---

##### `timeInstallDateStart`<sup>Required</sup> <a name="timeInstallDateStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateStart"></a>

```typescript
public readonly timeInstallDateStart: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceInstalledPackagesConfig <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledPackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceInstalledPackagesConfig: dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#managed_instance_id DataOciOsManagementHubManagedInstanceInstalledPackages#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceInstalledPackages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.displayName">displayName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#display_name DataOciOsManagementHubManagedInstanceInstalledPackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceInstalledPackages#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#id DataOciOsManagementHubManagedInstanceInstalledPackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.timeInstallDateEnd">timeInstallDateEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceInstalledPackages#time_install_date_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.timeInstallDateStart">timeInstallDateStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceInstalledPackages#time_install_date_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#managed_instance_id DataOciOsManagementHubManagedInstanceInstalledPackages#managed_instance_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceInstalledPackages#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.displayName"></a>

```typescript
public readonly displayName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#display_name DataOciOsManagementHubManagedInstanceInstalledPackages#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceInstalledPackages#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsManagementHubManagedInstanceInstalledPackagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#filter DataOciOsManagementHubManagedInstanceInstalledPackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#id DataOciOsManagementHubManagedInstanceInstalledPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeInstallDateEnd`<sup>Optional</sup> <a name="timeInstallDateEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.timeInstallDateEnd"></a>

```typescript
public readonly timeInstallDateEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceInstalledPackages#time_install_date_end}.

---

##### `timeInstallDateStart`<sup>Optional</sup> <a name="timeInstallDateStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.timeInstallDateStart"></a>

```typescript
public readonly timeInstallDateStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceInstalledPackages#time_install_date_start}.

---

### DataOciOsManagementHubManagedInstanceInstalledPackagesFilter <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledPackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceInstalledPackagesFilter: dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#name DataOciOsManagementHubManagedInstanceInstalledPackages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#values DataOciOsManagementHubManagedInstanceInstalledPackages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#regex DataOciOsManagementHubManagedInstanceInstalledPackages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#name DataOciOsManagementHubManagedInstanceInstalledPackages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#values DataOciOsManagementHubManagedInstanceInstalledPackages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#regex DataOciOsManagementHubManagedInstanceInstalledPackages#regex}.

---

### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledPackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection: dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection = { ... }
```


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledPackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems: dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems = { ... }
```


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledPackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources: dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubManagedInstanceInstalledPackagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>[]

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubManagedInstanceInstalledPackagesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter">DataOciOsManagementHubManagedInstanceInstalledPackagesFilter</a>

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.packageClassification">packageClassification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.softwareSources">softwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.timeInstalled">timeInstalled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.timeIssued">timeIssued</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `packageClassification`<sup>Required</sup> <a name="packageClassification" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.packageClassification"></a>

```typescript
public readonly packageClassification: string;
```

- *Type:* string

---

##### `softwareSources`<sup>Required</sup> <a name="softwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.softwareSources"></a>

```typescript
public readonly softwareSources: DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList</a>

---

##### `timeInstalled`<sup>Required</sup> <a name="timeInstalled" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.timeInstalled"></a>

```typescript
public readonly timeInstalled: string;
```

- *Type:* string

---

##### `timeIssued`<sup>Required</sup> <a name="timeIssued" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.timeIssued"></a>

```typescript
public readonly timeIssued: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">isMandatoryForAutonomousLinux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType">softwareSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isMandatoryForAutonomousLinux`<sup>Required</sup> <a name="isMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```typescript
public readonly isMandatoryForAutonomousLinux: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `softwareSourceType`<sup>Required</sup> <a name="softwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```typescript
public readonly softwareSourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources</a>

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection</a>

---



