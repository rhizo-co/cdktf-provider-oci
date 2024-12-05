# `dataOciOsManagementHubSoftwareSourcePackageGroups` Submodule <a name="`dataOciOsManagementHubSoftwareSourcePackageGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwareSourcePackageGroups <a name="DataOciOsManagementHubSoftwareSourcePackageGroups" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups oci_os_management_hub_software_source_package_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourcePackageGroups(Construct Scope, string Id, DataOciOsManagementHubSoftwareSourcePackageGroupsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig">DataOciOsManagementHubSoftwareSourcePackageGroupsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig">DataOciOsManagementHubSoftwareSourcePackageGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetGroupType">ResetGroupType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetNameContains">ResetNameContains</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetGroupType` <a name="ResetGroupType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetGroupType"></a>

```csharp
private void ResetGroupType()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNameContains` <a name="ResetNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetNameContains"></a>

```csharp
private void ResetNameContains()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourcePackageGroups resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubSoftwareSourcePackageGroups.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubSoftwareSourcePackageGroups.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubSoftwareSourcePackageGroups.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsManagementHubSoftwareSourcePackageGroups.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourcePackageGroups resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubSoftwareSourcePackageGroups to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubSoftwareSourcePackageGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwareSourcePackageGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList">DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.packageGroupCollection">PackageGroupCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.groupTypeInput">GroupTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.nameContainsInput">NameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.softwareSourceIdInput">SoftwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.groupType">GroupType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.nameContains">NameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.filter"></a>

```csharp
public DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList">DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList</a>

---

##### `PackageGroupCollection`<sup>Required</sup> <a name="PackageGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.packageGroupCollection"></a>

```csharp
public DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList PackageGroupCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `GroupTypeInput`<sup>Optional</sup> <a name="GroupTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.groupTypeInput"></a>

```csharp
public string[] GroupTypeInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameContainsInput`<sup>Optional</sup> <a name="NameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.nameContainsInput"></a>

```csharp
public string NameContainsInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SoftwareSourceIdInput`<sup>Optional</sup> <a name="SoftwareSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.softwareSourceIdInput"></a>

```csharp
public string SoftwareSourceIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `GroupType`<sup>Required</sup> <a name="GroupType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.groupType"></a>

```csharp
public string[] GroupType { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameContains`<sup>Required</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.nameContains"></a>

```csharp
public string NameContains { get; }
```

- *Type:* string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwareSourcePackageGroupsConfig <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourcePackageGroupsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SoftwareSourceId,
    string CompartmentId = null,
    object Filter = null,
    string[] GroupType = null,
    string Id = null,
    string Name = null,
    string NameContains = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.softwareSourceId">SoftwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#software_source_id DataOciOsManagementHubSoftwareSourcePackageGroups#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#compartment_id DataOciOsManagementHubSoftwareSourcePackageGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.groupType">GroupType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#group_type DataOciOsManagementHubSoftwareSourcePackageGroups#group_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#id DataOciOsManagementHubSoftwareSourcePackageGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name DataOciOsManagementHubSoftwareSourcePackageGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.nameContains">NameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name_contains DataOciOsManagementHubSoftwareSourcePackageGroups#name_contains}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.softwareSourceId"></a>

```csharp
public string SoftwareSourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#software_source_id DataOciOsManagementHubSoftwareSourcePackageGroups#software_source_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#compartment_id DataOciOsManagementHubSoftwareSourcePackageGroups#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#filter DataOciOsManagementHubSoftwareSourcePackageGroups#filter}

---

##### `GroupType`<sup>Optional</sup> <a name="GroupType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.groupType"></a>

```csharp
public string[] GroupType { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#group_type DataOciOsManagementHubSoftwareSourcePackageGroups#group_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#id DataOciOsManagementHubSoftwareSourcePackageGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name DataOciOsManagementHubSoftwareSourcePackageGroups#name}.

---

##### `NameContains`<sup>Optional</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.nameContains"></a>

```csharp
public string NameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name_contains DataOciOsManagementHubSoftwareSourcePackageGroups#name_contains}.

---

### DataOciOsManagementHubSoftwareSourcePackageGroupsFilter <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourcePackageGroupsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name DataOciOsManagementHubSoftwareSourcePackageGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#values DataOciOsManagementHubSoftwareSourcePackageGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#regex DataOciOsManagementHubSoftwareSourcePackageGroups#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name DataOciOsManagementHubSoftwareSourcePackageGroups#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#values DataOciOsManagementHubSoftwareSourcePackageGroups#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#regex DataOciOsManagementHubSoftwareSourcePackageGroups#regex}.

---

### DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection {

};
```


### DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.get"></a>

```csharp
private DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.get"></a>

```csharp
private DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.displayOrder">DisplayOrder</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.groupType">GroupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.isDefault">IsDefault</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.isUserVisible">IsUserVisible</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.packages">Packages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.repositories">Repositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayOrder`<sup>Required</sup> <a name="DisplayOrder" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.displayOrder"></a>

```csharp
public double DisplayOrder { get; }
```

- *Type:* double

---

##### `GroupType`<sup>Required</sup> <a name="GroupType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.groupType"></a>

```csharp
public string GroupType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsUserVisible`<sup>Required</sup> <a name="IsUserVisible" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.isUserVisible"></a>

```csharp
public IResolvable IsUserVisible { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Packages`<sup>Required</sup> <a name="Packages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.packages"></a>

```csharp
public string[] Packages { get; }
```

- *Type:* string[]

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.repositories"></a>

```csharp
public string[] Repositories { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems</a>

---


### DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.get"></a>

```csharp
private DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.items"></a>

```csharp
public DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection</a>

---



