# `dataOciJmsFleetInstallationSites` Submodule <a name="`dataOciJmsFleetInstallationSites` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetInstallationSites <a name="DataOciJmsFleetInstallationSites" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites oci_jms_fleet_installation_sites}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSites(Construct Scope, string Id, DataOciJmsFleetInstallationSitesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig">DataOciJmsFleetInstallationSitesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig">DataOciJmsFleetInstallationSitesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetInstallationPath">ResetInstallationPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreDistribution">ResetJreDistribution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreSecurityStatus">ResetJreSecurityStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreVendor">ResetJreVendor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreVersion">ResetJreVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetManagedInstanceId">ResetManagedInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetOsFamily">ResetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetPathContains">ResetPathContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetTimeEnd">ResetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetTimeStart">ResetTimeStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetApplicationId` <a name="ResetApplicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetApplicationId"></a>

```csharp
private void ResetApplicationId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstallationPath` <a name="ResetInstallationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetInstallationPath"></a>

```csharp
private void ResetInstallationPath()
```

##### `ResetJreDistribution` <a name="ResetJreDistribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreDistribution"></a>

```csharp
private void ResetJreDistribution()
```

##### `ResetJreSecurityStatus` <a name="ResetJreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreSecurityStatus"></a>

```csharp
private void ResetJreSecurityStatus()
```

##### `ResetJreVendor` <a name="ResetJreVendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreVendor"></a>

```csharp
private void ResetJreVendor()
```

##### `ResetJreVersion` <a name="ResetJreVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreVersion"></a>

```csharp
private void ResetJreVersion()
```

##### `ResetManagedInstanceId` <a name="ResetManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetManagedInstanceId"></a>

```csharp
private void ResetManagedInstanceId()
```

##### `ResetOsFamily` <a name="ResetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetOsFamily"></a>

```csharp
private void ResetOsFamily()
```

##### `ResetPathContains` <a name="ResetPathContains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetPathContains"></a>

```csharp
private void ResetPathContains()
```

##### `ResetTimeEnd` <a name="ResetTimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetTimeEnd"></a>

```csharp
private void ResetTimeEnd()
```

##### `ResetTimeStart` <a name="ResetTimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetTimeStart"></a>

```csharp
private void ResetTimeStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsFleetInstallationSites resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsFleetInstallationSites.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsFleetInstallationSites.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsFleetInstallationSites.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsFleetInstallationSites.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciJmsFleetInstallationSites resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciJmsFleetInstallationSites to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciJmsFleetInstallationSites that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetInstallationSites to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList">DataOciJmsFleetInstallationSitesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationSiteCollection">InstallationSiteCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fleetIdInput">FleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationPathInput">InstallationPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreDistributionInput">JreDistributionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreSecurityStatusInput">JreSecurityStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVendorInput">JreVendorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVersionInput">JreVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.osFamilyInput">OsFamilyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.pathContainsInput">PathContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeEndInput">TimeEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeStartInput">TimeStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fleetId">FleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationPath">InstallationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreDistribution">JreDistribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreSecurityStatus">JreSecurityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVendor">JreVendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVersion">JreVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.osFamily">OsFamily</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.pathContains">PathContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.filter"></a>

```csharp
public DataOciJmsFleetInstallationSitesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList">DataOciJmsFleetInstallationSitesFilterList</a>

---

##### `InstallationSiteCollection`<sup>Required</sup> <a name="InstallationSiteCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationSiteCollection"></a>

```csharp
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionList InstallationSiteCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionList</a>

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `FleetIdInput`<sup>Optional</sup> <a name="FleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fleetIdInput"></a>

```csharp
public string FleetIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstallationPathInput`<sup>Optional</sup> <a name="InstallationPathInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationPathInput"></a>

```csharp
public string InstallationPathInput { get; }
```

- *Type:* string

---

##### `JreDistributionInput`<sup>Optional</sup> <a name="JreDistributionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreDistributionInput"></a>

```csharp
public string JreDistributionInput { get; }
```

- *Type:* string

---

##### `JreSecurityStatusInput`<sup>Optional</sup> <a name="JreSecurityStatusInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreSecurityStatusInput"></a>

```csharp
public string JreSecurityStatusInput { get; }
```

- *Type:* string

---

##### `JreVendorInput`<sup>Optional</sup> <a name="JreVendorInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVendorInput"></a>

```csharp
public string JreVendorInput { get; }
```

- *Type:* string

---

##### `JreVersionInput`<sup>Optional</sup> <a name="JreVersionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVersionInput"></a>

```csharp
public string JreVersionInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.managedInstanceIdInput"></a>

```csharp
public string ManagedInstanceIdInput { get; }
```

- *Type:* string

---

##### `OsFamilyInput`<sup>Optional</sup> <a name="OsFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.osFamilyInput"></a>

```csharp
public string[] OsFamilyInput { get; }
```

- *Type:* string[]

---

##### `PathContainsInput`<sup>Optional</sup> <a name="PathContainsInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.pathContainsInput"></a>

```csharp
public string PathContainsInput { get; }
```

- *Type:* string

---

##### `TimeEndInput`<sup>Optional</sup> <a name="TimeEndInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeEndInput"></a>

```csharp
public string TimeEndInput { get; }
```

- *Type:* string

---

##### `TimeStartInput`<sup>Optional</sup> <a name="TimeStartInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeStartInput"></a>

```csharp
public string TimeStartInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fleetId"></a>

```csharp
public string FleetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstallationPath`<sup>Required</sup> <a name="InstallationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationPath"></a>

```csharp
public string InstallationPath { get; }
```

- *Type:* string

---

##### `JreDistribution`<sup>Required</sup> <a name="JreDistribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreDistribution"></a>

```csharp
public string JreDistribution { get; }
```

- *Type:* string

---

##### `JreSecurityStatus`<sup>Required</sup> <a name="JreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreSecurityStatus"></a>

```csharp
public string JreSecurityStatus { get; }
```

- *Type:* string

---

##### `JreVendor`<sup>Required</sup> <a name="JreVendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVendor"></a>

```csharp
public string JreVendor { get; }
```

- *Type:* string

---

##### `JreVersion`<sup>Required</sup> <a name="JreVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVersion"></a>

```csharp
public string JreVersion { get; }
```

- *Type:* string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; }
```

- *Type:* string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.osFamily"></a>

```csharp
public string[] OsFamily { get; }
```

- *Type:* string[]

---

##### `PathContains`<sup>Required</sup> <a name="PathContains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.pathContains"></a>

```csharp
public string PathContains { get; }
```

- *Type:* string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetInstallationSitesConfig <a name="DataOciJmsFleetInstallationSitesConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FleetId,
    string ApplicationId = null,
    object Filter = null,
    string Id = null,
    string InstallationPath = null,
    string JreDistribution = null,
    string JreSecurityStatus = null,
    string JreVendor = null,
    string JreVersion = null,
    string ManagedInstanceId = null,
    string[] OsFamily = null,
    string PathContains = null,
    string TimeEnd = null,
    string TimeStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.fleetId">FleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#fleet_id DataOciJmsFleetInstallationSites#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#application_id DataOciJmsFleetInstallationSites#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#id DataOciJmsFleetInstallationSites#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.installationPath">InstallationPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#installation_path DataOciJmsFleetInstallationSites#installation_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreDistribution">JreDistribution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_distribution DataOciJmsFleetInstallationSites#jre_distribution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreSecurityStatus">JreSecurityStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_security_status DataOciJmsFleetInstallationSites#jre_security_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreVendor">JreVendor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_vendor DataOciJmsFleetInstallationSites#jre_vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreVersion">JreVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_version DataOciJmsFleetInstallationSites#jre_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#managed_instance_id DataOciJmsFleetInstallationSites#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.osFamily">OsFamily</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#os_family DataOciJmsFleetInstallationSites#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.pathContains">PathContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#path_contains DataOciJmsFleetInstallationSites#path_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.timeEnd">TimeEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_end DataOciJmsFleetInstallationSites#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.timeStart">TimeStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_start DataOciJmsFleetInstallationSites#time_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.fleetId"></a>

```csharp
public string FleetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#fleet_id DataOciJmsFleetInstallationSites#fleet_id}.

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#application_id DataOciJmsFleetInstallationSites#application_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#filter DataOciJmsFleetInstallationSites#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#id DataOciJmsFleetInstallationSites#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstallationPath`<sup>Optional</sup> <a name="InstallationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.installationPath"></a>

```csharp
public string InstallationPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#installation_path DataOciJmsFleetInstallationSites#installation_path}.

---

##### `JreDistribution`<sup>Optional</sup> <a name="JreDistribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreDistribution"></a>

```csharp
public string JreDistribution { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_distribution DataOciJmsFleetInstallationSites#jre_distribution}.

---

##### `JreSecurityStatus`<sup>Optional</sup> <a name="JreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreSecurityStatus"></a>

```csharp
public string JreSecurityStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_security_status DataOciJmsFleetInstallationSites#jre_security_status}.

---

##### `JreVendor`<sup>Optional</sup> <a name="JreVendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreVendor"></a>

```csharp
public string JreVendor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_vendor DataOciJmsFleetInstallationSites#jre_vendor}.

---

##### `JreVersion`<sup>Optional</sup> <a name="JreVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreVersion"></a>

```csharp
public string JreVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_version DataOciJmsFleetInstallationSites#jre_version}.

---

##### `ManagedInstanceId`<sup>Optional</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#managed_instance_id DataOciJmsFleetInstallationSites#managed_instance_id}.

---

##### `OsFamily`<sup>Optional</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.osFamily"></a>

```csharp
public string[] OsFamily { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#os_family DataOciJmsFleetInstallationSites#os_family}.

---

##### `PathContains`<sup>Optional</sup> <a name="PathContains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.pathContains"></a>

```csharp
public string PathContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#path_contains DataOciJmsFleetInstallationSites#path_contains}.

---

##### `TimeEnd`<sup>Optional</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.timeEnd"></a>

```csharp
public string TimeEnd { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_end DataOciJmsFleetInstallationSites#time_end}.

---

##### `TimeStart`<sup>Optional</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.timeStart"></a>

```csharp
public string TimeStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_start DataOciJmsFleetInstallationSites#time_start}.

---

### DataOciJmsFleetInstallationSitesFilter <a name="DataOciJmsFleetInstallationSitesFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#name DataOciJmsFleetInstallationSites#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#values DataOciJmsFleetInstallationSites#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#regex DataOciJmsFleetInstallationSites#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#name DataOciJmsFleetInstallationSites#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#values DataOciJmsFleetInstallationSites#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#regex DataOciJmsFleetInstallationSites#regex}.

---

### DataOciJmsFleetInstallationSitesInstallationSiteCollection <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesInstallationSiteCollection {

};
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems {

};
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems {

};
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct {

};
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre {

};
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsFleetInstallationSitesFilterList <a name="DataOciJmsFleetInstallationSitesFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.get"></a>

```csharp
private DataOciJmsFleetInstallationSitesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciJmsFleetInstallationSitesFilterOutputReference <a name="DataOciJmsFleetInstallationSitesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.get"></a>

```csharp
private DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.get"></a>

```csharp
private DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.distribution">Distribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.jreKey">JreKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.vendor">Vendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Distribution`<sup>Required</sup> <a name="Distribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.distribution"></a>

```csharp
public string Distribution { get; }
```

- *Type:* string

---

##### `JreKey`<sup>Required</sup> <a name="JreKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.jreKey"></a>

```csharp
public string JreKey { get; }
```

- *Type:* string

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.vendor"></a>

```csharp
public string Vendor { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.get"></a>

```csharp
private DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.get"></a>

```csharp
private DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.family">Family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.managedInstanceCount">ManagedInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `Family`<sup>Required</sup> <a name="Family" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.family"></a>

```csharp
public string Family { get; }
```

- *Type:* string

---

##### `ManagedInstanceCount`<sup>Required</sup> <a name="ManagedInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.managedInstanceCount"></a>

```csharp
public double ManagedInstanceCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.approximateApplicationCount">ApproximateApplicationCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.blocklist">Blocklist</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.installationKey">InstallationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.jre">Jre</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.securityStatus">SecurityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.timeLastSeen">TimeLastSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApproximateApplicationCount`<sup>Required</sup> <a name="ApproximateApplicationCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.approximateApplicationCount"></a>

```csharp
public double ApproximateApplicationCount { get; }
```

- *Type:* double

---

##### `Blocklist`<sup>Required</sup> <a name="Blocklist" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.blocklist"></a>

```csharp
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList Blocklist { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList</a>

---

##### `InstallationKey`<sup>Required</sup> <a name="InstallationKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.installationKey"></a>

```csharp
public string InstallationKey { get; }
```

- *Type:* string

---

##### `Jre`<sup>Required</sup> <a name="Jre" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.jre"></a>

```csharp
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList Jre { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList</a>

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; }
```

- *Type:* string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.operatingSystem"></a>

```csharp
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList OperatingSystem { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList</a>

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `SecurityStatus`<sup>Required</sup> <a name="SecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.securityStatus"></a>

```csharp
public string SecurityStatus { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeLastSeen`<sup>Required</sup> <a name="TimeLastSeen" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.timeLastSeen"></a>

```csharp
public string TimeLastSeen { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.get"></a>

```csharp
private DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.items"></a>

```csharp
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.get"></a>

```csharp
private DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollection">DataOciJmsFleetInstallationSitesInstallationSiteCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.items"></a>

```csharp
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetInstallationSitesInstallationSiteCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollection">DataOciJmsFleetInstallationSitesInstallationSiteCollection</a>

---



