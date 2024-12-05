# `dataOciOsManagementHubManagedInstanceGroupInstalledPackages` Submodule <a name="`dataOciOsManagementHubManagedInstanceGroupInstalledPackages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceGroupInstalledPackages <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages oci_os_management_hub_managed_instance_group_installed_packages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupInstalledPackages(Construct Scope, string Id, DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetDisplayNameContains">ResetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetTimeInstallDateEnd">ResetTimeInstallDateEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetTimeInstallDateStart">ResetTimeInstallDateStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDisplayNameContains` <a name="ResetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetDisplayNameContains"></a>

```csharp
private void ResetDisplayNameContains()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeInstallDateEnd` <a name="ResetTimeInstallDateEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetTimeInstallDateEnd"></a>

```csharp
private void ResetTimeInstallDateEnd()
```

##### `ResetTimeInstallDateStart` <a name="ResetTimeInstallDateStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetTimeInstallDateStart"></a>

```csharp
private void ResetTimeInstallDateStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupInstalledPackages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubManagedInstanceGroupInstalledPackages.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubManagedInstanceGroupInstalledPackages.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubManagedInstanceGroupInstalledPackages.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubManagedInstanceGroupInstalledPackages.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupInstalledPackages resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceGroupInstalledPackages to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubManagedInstanceGroupInstalledPackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceGroupInstalledPackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupInstalledPackageCollection">ManagedInstanceGroupInstalledPackageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameContainsInput">DisplayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameInput">DisplayNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupIdInput">ManagedInstanceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateEndInput">TimeInstallDateEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateStartInput">TimeInstallDateStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayName">DisplayName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameContains">DisplayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateEnd">TimeInstallDateEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateStart">TimeInstallDateStart</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.filter"></a>

```csharp
public DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList</a>

---

##### `ManagedInstanceGroupInstalledPackageCollection`<sup>Required</sup> <a name="ManagedInstanceGroupInstalledPackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupInstalledPackageCollection"></a>

```csharp
public DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList ManagedInstanceGroupInstalledPackageCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameContainsInput`<sup>Optional</sup> <a name="DisplayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameContainsInput"></a>

```csharp
public string DisplayNameContainsInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameInput"></a>

```csharp
public string[] DisplayNameInput { get; }
```

- *Type:* string[]

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceGroupIdInput`<sup>Optional</sup> <a name="ManagedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupIdInput"></a>

```csharp
public string ManagedInstanceGroupIdInput { get; }
```

- *Type:* string

---

##### `TimeInstallDateEndInput`<sup>Optional</sup> <a name="TimeInstallDateEndInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateEndInput"></a>

```csharp
public string TimeInstallDateEndInput { get; }
```

- *Type:* string

---

##### `TimeInstallDateStartInput`<sup>Optional</sup> <a name="TimeInstallDateStartInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateStartInput"></a>

```csharp
public string TimeInstallDateStartInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayName"></a>

```csharp
public string[] DisplayName { get; }
```

- *Type:* string[]

---

##### `DisplayNameContains`<sup>Required</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameContains"></a>

```csharp
public string DisplayNameContains { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupId"></a>

```csharp
public string ManagedInstanceGroupId { get; }
```

- *Type:* string

---

##### `TimeInstallDateEnd`<sup>Required</sup> <a name="TimeInstallDateEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateEnd"></a>

```csharp
public string TimeInstallDateEnd { get; }
```

- *Type:* string

---

##### `TimeInstallDateStart`<sup>Required</sup> <a name="TimeInstallDateStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateStart"></a>

```csharp
public string TimeInstallDateStart { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedInstanceGroupId,
    string CompartmentId = null,
    string[] DisplayName = null,
    string DisplayNameContains = null,
    object Filter = null,
    string Id = null,
    string TimeInstallDateEnd = null,
    string TimeInstallDateStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.displayName">DisplayName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.displayNameContains">DisplayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.timeInstallDateEnd">TimeInstallDateEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.timeInstallDateStart">TimeInstallDateStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.managedInstanceGroupId"></a>

```csharp
public string ManagedInstanceGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#managed_instance_group_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.displayName"></a>

```csharp
public string[] DisplayName { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name}.

---

##### `DisplayNameContains`<sup>Optional</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.displayNameContains"></a>

```csharp
public string DisplayNameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name_contains}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#filter DataOciOsManagementHubManagedInstanceGroupInstalledPackages#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeInstallDateEnd`<sup>Optional</sup> <a name="TimeInstallDateEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.timeInstallDateEnd"></a>

```csharp
public string TimeInstallDateEnd { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_end}.

---

##### `TimeInstallDateStart`<sup>Optional</sup> <a name="TimeInstallDateStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.timeInstallDateStart"></a>

```csharp
public string TimeInstallDateStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_start}.

---

### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#values DataOciOsManagementHubManagedInstanceGroupInstalledPackages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#regex DataOciOsManagementHubManagedInstanceGroupInstalledPackages#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#values DataOciOsManagementHubManagedInstanceGroupInstalledPackages#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#regex DataOciOsManagementHubManagedInstanceGroupInstalledPackages#regex}.

---

### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection {

};
```


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.get"></a>

```csharp
private DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.get"></a>

```csharp
private DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.get"></a>

```csharp
private DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.items"></a>

```csharp
public DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection</a>

---



