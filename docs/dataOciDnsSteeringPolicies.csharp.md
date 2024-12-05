# `dataOciDnsSteeringPolicies` Submodule <a name="`dataOciDnsSteeringPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDnsSteeringPolicies <a name="DataOciDnsSteeringPolicies" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies oci_dns_steering_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPolicies(Construct Scope, string Id, DataOciDnsSteeringPoliciesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig">DataOciDnsSteeringPoliciesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig">DataOciDnsSteeringPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetDisplayNameContains">ResetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetHealthCheckMonitorId">ResetHealthCheckMonitorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetTemplate">ResetTemplate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetTimeCreatedGreaterThanOrEqualTo">ResetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetTimeCreatedLessThan">ResetTimeCreatedLessThan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDisplayNameContains` <a name="ResetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetDisplayNameContains"></a>

```csharp
private void ResetDisplayNameContains()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetHealthCheckMonitorId` <a name="ResetHealthCheckMonitorId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetHealthCheckMonitorId"></a>

```csharp
private void ResetHealthCheckMonitorId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTemplate` <a name="ResetTemplate" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetTemplate"></a>

```csharp
private void ResetTemplate()
```

##### `ResetTimeCreatedGreaterThanOrEqualTo` <a name="ResetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetTimeCreatedGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimeCreatedGreaterThanOrEqualTo()
```

##### `ResetTimeCreatedLessThan` <a name="ResetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.resetTimeCreatedLessThan"></a>

```csharp
private void ResetTimeCreatedLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDnsSteeringPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDnsSteeringPolicies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDnsSteeringPolicies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDnsSteeringPolicies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDnsSteeringPolicies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDnsSteeringPolicies resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDnsSteeringPolicies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDnsSteeringPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDnsSteeringPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList">DataOciDnsSteeringPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.steeringPolicies">SteeringPolicies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList">DataOciDnsSteeringPoliciesSteeringPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.displayNameContainsInput">DisplayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.healthCheckMonitorIdInput">HealthCheckMonitorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.templateInput">TemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.timeCreatedGreaterThanOrEqualToInput">TimeCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.timeCreatedLessThanInput">TimeCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.displayNameContains">DisplayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.healthCheckMonitorId">HealthCheckMonitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.template">Template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.filter"></a>

```csharp
public DataOciDnsSteeringPoliciesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList">DataOciDnsSteeringPoliciesFilterList</a>

---

##### `SteeringPolicies`<sup>Required</sup> <a name="SteeringPolicies" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.steeringPolicies"></a>

```csharp
public DataOciDnsSteeringPoliciesSteeringPoliciesList SteeringPolicies { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList">DataOciDnsSteeringPoliciesSteeringPoliciesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameContainsInput`<sup>Optional</sup> <a name="DisplayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.displayNameContainsInput"></a>

```csharp
public string DisplayNameContainsInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `HealthCheckMonitorIdInput`<sup>Optional</sup> <a name="HealthCheckMonitorIdInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.healthCheckMonitorIdInput"></a>

```csharp
public string HealthCheckMonitorIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.templateInput"></a>

```csharp
public string TemplateInput { get; }
```

- *Type:* string

---

##### `TimeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.timeCreatedGreaterThanOrEqualToInput"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimeCreatedLessThanInput`<sup>Optional</sup> <a name="TimeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.timeCreatedLessThanInput"></a>

```csharp
public string TimeCreatedLessThanInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DisplayNameContains`<sup>Required</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.displayNameContains"></a>

```csharp
public string DisplayNameContains { get; }
```

- *Type:* string

---

##### `HealthCheckMonitorId`<sup>Required</sup> <a name="HealthCheckMonitorId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.healthCheckMonitorId"></a>

```csharp
public string HealthCheckMonitorId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Template`<sup>Required</sup> <a name="Template" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.template"></a>

```csharp
public string Template { get; }
```

- *Type:* string

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.timeCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimeCreatedLessThan`<sup>Required</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.timeCreatedLessThan"></a>

```csharp
public string TimeCreatedLessThan { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPolicies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDnsSteeringPoliciesConfig <a name="DataOciDnsSteeringPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName = null,
    string DisplayNameContains = null,
    object Filter = null,
    string HealthCheckMonitorId = null,
    string Id = null,
    string State = null,
    string Template = null,
    string TimeCreatedGreaterThanOrEqualTo = null,
    string TimeCreatedLessThan = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#compartment_id DataOciDnsSteeringPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#display_name DataOciDnsSteeringPolicies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.displayNameContains">DisplayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#display_name_contains DataOciDnsSteeringPolicies#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.healthCheckMonitorId">HealthCheckMonitorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#health_check_monitor_id DataOciDnsSteeringPolicies#health_check_monitor_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#id DataOciDnsSteeringPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#state DataOciDnsSteeringPolicies#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.template">Template</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#template DataOciDnsSteeringPolicies#template}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#time_created_greater_than_or_equal_to DataOciDnsSteeringPolicies#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#time_created_less_than DataOciDnsSteeringPolicies#time_created_less_than}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#compartment_id DataOciDnsSteeringPolicies#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#display_name DataOciDnsSteeringPolicies#display_name}.

---

##### `DisplayNameContains`<sup>Optional</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.displayNameContains"></a>

```csharp
public string DisplayNameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#display_name_contains DataOciDnsSteeringPolicies#display_name_contains}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#filter DataOciDnsSteeringPolicies#filter}

---

##### `HealthCheckMonitorId`<sup>Optional</sup> <a name="HealthCheckMonitorId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.healthCheckMonitorId"></a>

```csharp
public string HealthCheckMonitorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#health_check_monitor_id DataOciDnsSteeringPolicies#health_check_monitor_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#id DataOciDnsSteeringPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#state DataOciDnsSteeringPolicies#state}.

---

##### `Template`<sup>Optional</sup> <a name="Template" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.template"></a>

```csharp
public string Template { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#template DataOciDnsSteeringPolicies#template}.

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#time_created_greater_than_or_equal_to DataOciDnsSteeringPolicies#time_created_greater_than_or_equal_to}.

---

##### `TimeCreatedLessThan`<sup>Optional</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesConfig.property.timeCreatedLessThan"></a>

```csharp
public string TimeCreatedLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#time_created_less_than DataOciDnsSteeringPolicies#time_created_less_than}.

---

### DataOciDnsSteeringPoliciesFilter <a name="DataOciDnsSteeringPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#name DataOciDnsSteeringPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#values DataOciDnsSteeringPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#regex DataOciDnsSteeringPolicies#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#name DataOciDnsSteeringPolicies#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#values DataOciDnsSteeringPolicies#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policies#regex DataOciDnsSteeringPolicies#regex}.

---

### DataOciDnsSteeringPoliciesSteeringPolicies <a name="DataOciDnsSteeringPoliciesSteeringPolicies" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesSteeringPolicies {

};
```


### DataOciDnsSteeringPoliciesSteeringPoliciesAnswers <a name="DataOciDnsSteeringPoliciesSteeringPoliciesAnswers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesSteeringPoliciesAnswers {

};
```


### DataOciDnsSteeringPoliciesSteeringPoliciesRules <a name="DataOciDnsSteeringPoliciesSteeringPoliciesRules" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesSteeringPoliciesRules {

};
```


### DataOciDnsSteeringPoliciesSteeringPoliciesRulesCases <a name="DataOciDnsSteeringPoliciesSteeringPoliciesRulesCases" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesSteeringPoliciesRulesCases {

};
```


### DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerData <a name="DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerData" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerData {

};
```


### DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerData <a name="DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerData" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerData {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDnsSteeringPoliciesFilterList <a name="DataOciDnsSteeringPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.get"></a>

```csharp
private DataOciDnsSteeringPoliciesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDnsSteeringPoliciesFilterOutputReference <a name="DataOciDnsSteeringPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList <a name="DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.get"></a>

```csharp
private DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference <a name="DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.property.isDisabled">IsDisabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.property.pool">Pool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.property.rdata">Rdata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.property.rtype">Rtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswers">DataOciDnsSteeringPoliciesSteeringPoliciesAnswers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.property.isDisabled"></a>

```csharp
public IResolvable IsDisabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Pool`<sup>Required</sup> <a name="Pool" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.property.pool"></a>

```csharp
public string Pool { get; }
```

- *Type:* string

---

##### `Rdata`<sup>Required</sup> <a name="Rdata" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.property.rdata"></a>

```csharp
public string Rdata { get; }
```

- *Type:* string

---

##### `Rtype`<sup>Required</sup> <a name="Rtype" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.property.rtype"></a>

```csharp
public string Rtype { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersOutputReference.property.internalValue"></a>

```csharp
public DataOciDnsSteeringPoliciesSteeringPoliciesAnswers InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswers">DataOciDnsSteeringPoliciesSteeringPoliciesAnswers</a>

---


### DataOciDnsSteeringPoliciesSteeringPoliciesList <a name="DataOciDnsSteeringPoliciesSteeringPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesSteeringPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.get"></a>

```csharp
private DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference <a name="DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.answers">Answers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList">DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.healthCheckMonitorId">HealthCheckMonitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList">DataOciDnsSteeringPoliciesSteeringPoliciesRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.selfAttribute">SelfAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.template">Template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPolicies">DataOciDnsSteeringPoliciesSteeringPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Answers`<sup>Required</sup> <a name="Answers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.answers"></a>

```csharp
public DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList Answers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList">DataOciDnsSteeringPoliciesSteeringPoliciesAnswersList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HealthCheckMonitorId`<sup>Required</sup> <a name="HealthCheckMonitorId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.healthCheckMonitorId"></a>

```csharp
public string HealthCheckMonitorId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.rules"></a>

```csharp
public DataOciDnsSteeringPoliciesSteeringPoliciesRulesList Rules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList">DataOciDnsSteeringPoliciesSteeringPoliciesRulesList</a>

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.selfAttribute"></a>

```csharp
public string SelfAttribute { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Template`<sup>Required</sup> <a name="Template" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.template"></a>

```csharp
public string Template { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataOciDnsSteeringPoliciesSteeringPolicies InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPolicies">DataOciDnsSteeringPoliciesSteeringPolicies</a>

---


### DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList <a name="DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.get"></a>

```csharp
private DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference <a name="DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.property.answerCondition">AnswerCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.property.shouldKeep">ShouldKeep</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerData">DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnswerCondition`<sup>Required</sup> <a name="AnswerCondition" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.property.answerCondition"></a>

```csharp
public string AnswerCondition { get; }
```

- *Type:* string

---

##### `ShouldKeep`<sup>Required</sup> <a name="ShouldKeep" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.property.shouldKeep"></a>

```csharp
public IResolvable ShouldKeep { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataOutputReference.property.internalValue"></a>

```csharp
public DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerData InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerData">DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerData</a>

---


### DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList <a name="DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.get"></a>

```csharp
private DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference <a name="DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.property.answerData">AnswerData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList">DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.property.caseCondition">CaseCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCases">DataOciDnsSteeringPoliciesSteeringPoliciesRulesCases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnswerData`<sup>Required</sup> <a name="AnswerData" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.property.answerData"></a>

```csharp
public DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList AnswerData { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList">DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerDataList</a>

---

##### `CaseCondition`<sup>Required</sup> <a name="CaseCondition" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.property.caseCondition"></a>

```csharp
public string CaseCondition { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesOutputReference.property.internalValue"></a>

```csharp
public DataOciDnsSteeringPoliciesSteeringPoliciesRulesCases InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCases">DataOciDnsSteeringPoliciesSteeringPoliciesRulesCases</a>

---


### DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList <a name="DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.get"></a>

```csharp
private DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference <a name="DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.property.answerCondition">AnswerCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.property.shouldKeep">ShouldKeep</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerData">DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnswerCondition`<sup>Required</sup> <a name="AnswerCondition" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.property.answerCondition"></a>

```csharp
public string AnswerCondition { get; }
```

- *Type:* string

---

##### `ShouldKeep`<sup>Required</sup> <a name="ShouldKeep" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.property.shouldKeep"></a>

```csharp
public IResolvable ShouldKeep { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataOutputReference.property.internalValue"></a>

```csharp
public DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerData InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerData">DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerData</a>

---


### DataOciDnsSteeringPoliciesSteeringPoliciesRulesList <a name="DataOciDnsSteeringPoliciesSteeringPoliciesRulesList" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesSteeringPoliciesRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.get"></a>

```csharp
private DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference <a name="DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.property.cases">Cases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList">DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.property.defaultAnswerData">DefaultAnswerData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList">DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.property.defaultCount">DefaultCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.property.ruleType">RuleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRules">DataOciDnsSteeringPoliciesSteeringPoliciesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cases`<sup>Required</sup> <a name="Cases" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.property.cases"></a>

```csharp
public DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList Cases { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList">DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesList</a>

---

##### `DefaultAnswerData`<sup>Required</sup> <a name="DefaultAnswerData" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.property.defaultAnswerData"></a>

```csharp
public DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList DefaultAnswerData { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList">DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerDataList</a>

---

##### `DefaultCount`<sup>Required</sup> <a name="DefaultCount" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.property.defaultCount"></a>

```csharp
public double DefaultCount { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.property.ruleType"></a>

```csharp
public string RuleType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciDnsSteeringPoliciesSteeringPoliciesRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicies.DataOciDnsSteeringPoliciesSteeringPoliciesRules">DataOciDnsSteeringPoliciesSteeringPoliciesRules</a>

---



