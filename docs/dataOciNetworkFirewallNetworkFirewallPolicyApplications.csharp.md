# `dataOciNetworkFirewallNetworkFirewallPolicyApplications` Submodule <a name="`dataOciNetworkFirewallNetworkFirewallPolicyApplications` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyApplications <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplications" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_applications oci_network_firewall_network_firewall_policy_applications}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyApplications(Construct Scope, string Id, DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig">DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig">DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyApplications resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkFirewallNetworkFirewallPolicyApplications.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkFirewallNetworkFirewallPolicyApplications.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkFirewallNetworkFirewallPolicyApplications.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciNetworkFirewallNetworkFirewallPolicyApplications.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyApplications resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciNetworkFirewallNetworkFirewallPolicyApplications to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciNetworkFirewallNetworkFirewallPolicyApplications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_applications#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkFirewallNetworkFirewallPolicyApplications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.applicationSummaryCollection">ApplicationSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList">DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.networkFirewallPolicyIdInput">NetworkFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApplicationSummaryCollection`<sup>Required</sup> <a name="ApplicationSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.applicationSummaryCollection"></a>

```csharp
public DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList ApplicationSummaryCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.filter"></a>

```csharp
public DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList">DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkFirewallPolicyIdInput`<sup>Optional</sup> <a name="NetworkFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.networkFirewallPolicyIdInput"></a>

```csharp
public string NetworkFirewallPolicyIdInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.networkFirewallPolicyId"></a>

```csharp
public string NetworkFirewallPolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplications.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollection <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollection {

};
```


### DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItems <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItems {

};
```


### DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string NetworkFirewallPolicyId,
    string DisplayName = null,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_applications#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyApplications#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_applications#display_name DataOciNetworkFirewallNetworkFirewallPolicyApplications#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_applications#id DataOciNetworkFirewallNetworkFirewallPolicyApplications#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.networkFirewallPolicyId"></a>

```csharp
public string NetworkFirewallPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_applications#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyApplications#network_firewall_policy_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_applications#display_name DataOciNetworkFirewallNetworkFirewallPolicyApplications#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_applications#filter DataOciNetworkFirewallNetworkFirewallPolicyApplications#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_applications#id DataOciNetworkFirewallNetworkFirewallPolicyApplications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilter <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_applications#name DataOciNetworkFirewallNetworkFirewallPolicyApplications#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_applications#values DataOciNetworkFirewallNetworkFirewallPolicyApplications#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_applications#regex DataOciNetworkFirewallNetworkFirewallPolicyApplications#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_applications#name DataOciNetworkFirewallNetworkFirewallPolicyApplications#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_applications#values DataOciNetworkFirewallNetworkFirewallPolicyApplications#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_applications#regex DataOciNetworkFirewallNetworkFirewallPolicyApplications#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.get"></a>

```csharp
private DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.property.icmpCode">IcmpCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.property.icmpType">IcmpType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.property.parentResourceId">ParentResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.property.icmpCode"></a>

```csharp
public double IcmpCode { get; }
```

- *Type:* double

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.property.icmpType"></a>

```csharp
public double IcmpType { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId"></a>

```csharp
public string NetworkFirewallPolicyId { get; }
```

- *Type:* string

---

##### `ParentResourceId`<sup>Required</sup> <a name="ParentResourceId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.property.parentResourceId"></a>

```csharp
public string ParentResourceId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItems</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.get"></a>

```csharp
private DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.property.items"></a>

```csharp
public DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicyApplicationsApplicationSummaryCollection</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.get"></a>

```csharp
private DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplications.DataOciNetworkFirewallNetworkFirewallPolicyApplicationsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



