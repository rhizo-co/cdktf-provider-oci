# `dataOciHealthChecksPingProbeResults` Submodule <a name="`dataOciHealthChecksPingProbeResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciHealthChecksPingProbeResults <a name="DataOciHealthChecksPingProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results oci_health_checks_ping_probe_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciHealthChecksPingProbeResults(Construct Scope, string Id, DataOciHealthChecksPingProbeResultsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig">DataOciHealthChecksPingProbeResultsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig">DataOciHealthChecksPingProbeResultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeGreaterThanOrEqualTo">ResetStartTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeLessThanOrEqualTo">ResetStartTimeLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStartTimeGreaterThanOrEqualTo` <a name="ResetStartTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeGreaterThanOrEqualTo"></a>

```csharp
private void ResetStartTimeGreaterThanOrEqualTo()
```

##### `ResetStartTimeLessThanOrEqualTo` <a name="ResetStartTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeLessThanOrEqualTo"></a>

```csharp
private void ResetStartTimeLessThanOrEqualTo()
```

##### `ResetTarget` <a name="ResetTarget" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetTarget"></a>

```csharp
private void ResetTarget()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciHealthChecksPingProbeResults resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciHealthChecksPingProbeResults.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciHealthChecksPingProbeResults.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciHealthChecksPingProbeResults.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciHealthChecksPingProbeResults.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciHealthChecksPingProbeResults resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciHealthChecksPingProbeResults to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciHealthChecksPingProbeResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciHealthChecksPingProbeResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList">DataOciHealthChecksPingProbeResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.pingProbeResults">PingProbeResults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList">DataOciHealthChecksPingProbeResultsPingProbeResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationIdInput">ProbeConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualToInput">StartTimeGreaterThanOrEqualToInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualToInput">StartTimeLessThanOrEqualToInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationId">ProbeConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualTo">StartTimeGreaterThanOrEqualTo</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualTo">StartTimeLessThanOrEqualTo</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.target">Target</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filter"></a>

```csharp
public DataOciHealthChecksPingProbeResultsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList">DataOciHealthChecksPingProbeResultsFilterList</a>

---

##### `PingProbeResults`<sup>Required</sup> <a name="PingProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.pingProbeResults"></a>

```csharp
public DataOciHealthChecksPingProbeResultsPingProbeResultsList PingProbeResults { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList">DataOciHealthChecksPingProbeResultsPingProbeResultsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProbeConfigurationIdInput`<sup>Optional</sup> <a name="ProbeConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationIdInput"></a>

```csharp
public string ProbeConfigurationIdInput { get; }
```

- *Type:* string

---

##### `StartTimeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="StartTimeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualToInput"></a>

```csharp
public double StartTimeGreaterThanOrEqualToInput { get; }
```

- *Type:* double

---

##### `StartTimeLessThanOrEqualToInput`<sup>Optional</sup> <a name="StartTimeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualToInput"></a>

```csharp
public double StartTimeLessThanOrEqualToInput { get; }
```

- *Type:* double

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProbeConfigurationId`<sup>Required</sup> <a name="ProbeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationId"></a>

```csharp
public string ProbeConfigurationId { get; }
```

- *Type:* string

---

##### `StartTimeGreaterThanOrEqualTo`<sup>Required</sup> <a name="StartTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualTo"></a>

```csharp
public double StartTimeGreaterThanOrEqualTo { get; }
```

- *Type:* double

---

##### `StartTimeLessThanOrEqualTo`<sup>Required</sup> <a name="StartTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualTo"></a>

```csharp
public double StartTimeLessThanOrEqualTo { get; }
```

- *Type:* double

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciHealthChecksPingProbeResultsConfig <a name="DataOciHealthChecksPingProbeResultsConfig" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciHealthChecksPingProbeResultsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ProbeConfigurationId,
    object Filter = null,
    string Id = null,
    double StartTimeGreaterThanOrEqualTo = null,
    double StartTimeLessThanOrEqualTo = null,
    string Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.probeConfigurationId">ProbeConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#probe_configuration_id DataOciHealthChecksPingProbeResults#probe_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#id DataOciHealthChecksPingProbeResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeGreaterThanOrEqualTo">StartTimeGreaterThanOrEqualTo</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeLessThanOrEqualTo">StartTimeLessThanOrEqualTo</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#target DataOciHealthChecksPingProbeResults#target}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProbeConfigurationId`<sup>Required</sup> <a name="ProbeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.probeConfigurationId"></a>

```csharp
public string ProbeConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#probe_configuration_id DataOciHealthChecksPingProbeResults#probe_configuration_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#filter DataOciHealthChecksPingProbeResults#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#id DataOciHealthChecksPingProbeResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StartTimeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="StartTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeGreaterThanOrEqualTo"></a>

```csharp
public double StartTimeGreaterThanOrEqualTo { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_greater_than_or_equal_to}.

---

##### `StartTimeLessThanOrEqualTo`<sup>Optional</sup> <a name="StartTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeLessThanOrEqualTo"></a>

```csharp
public double StartTimeLessThanOrEqualTo { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_less_than_or_equal_to}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#target DataOciHealthChecksPingProbeResults#target}.

---

### DataOciHealthChecksPingProbeResultsFilter <a name="DataOciHealthChecksPingProbeResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciHealthChecksPingProbeResultsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#name DataOciHealthChecksPingProbeResults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#values DataOciHealthChecksPingProbeResults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#regex DataOciHealthChecksPingProbeResults#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#name DataOciHealthChecksPingProbeResults#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#values DataOciHealthChecksPingProbeResults#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#regex DataOciHealthChecksPingProbeResults#regex}.

---

### DataOciHealthChecksPingProbeResultsPingProbeResults <a name="DataOciHealthChecksPingProbeResultsPingProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciHealthChecksPingProbeResultsPingProbeResults {

};
```


### DataOciHealthChecksPingProbeResultsPingProbeResultsConnection <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsConnection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciHealthChecksPingProbeResultsPingProbeResultsConnection {

};
```


### DataOciHealthChecksPingProbeResultsPingProbeResultsDns <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsDns" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciHealthChecksPingProbeResultsPingProbeResultsDns {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciHealthChecksPingProbeResultsFilterList <a name="DataOciHealthChecksPingProbeResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciHealthChecksPingProbeResultsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.get"></a>

```csharp
private DataOciHealthChecksPingProbeResultsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciHealthChecksPingProbeResultsFilterOutputReference <a name="DataOciHealthChecksPingProbeResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciHealthChecksPingProbeResultsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.get"></a>

```csharp
private DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection">DataOciHealthChecksPingProbeResultsPingProbeResultsConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.internalValue"></a>

```csharp
public DataOciHealthChecksPingProbeResultsPingProbeResultsConnection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection">DataOciHealthChecksPingProbeResultsPingProbeResultsConnection</a>

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.get"></a>

```csharp
private DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.addresses">Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.domainLookupDuration">DomainLookupDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns">DataOciHealthChecksPingProbeResultsPingProbeResultsDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.addresses"></a>

```csharp
public string[] Addresses { get; }
```

- *Type:* string[]

---

##### `DomainLookupDuration`<sup>Required</sup> <a name="DomainLookupDuration" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.domainLookupDuration"></a>

```csharp
public double DomainLookupDuration { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.internalValue"></a>

```csharp
public DataOciHealthChecksPingProbeResultsPingProbeResultsDns InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns">DataOciHealthChecksPingProbeResultsPingProbeResultsDns</a>

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsList <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciHealthChecksPingProbeResultsPingProbeResultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.get"></a>

```csharp
private DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.connection">Connection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList">DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.dns">Dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList">DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupEnd">DomainLookupEnd</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupStart">DomainLookupStart</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorCategory">ErrorCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.icmpCode">IcmpCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isHealthy">IsHealthy</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isTimedOut">IsTimedOut</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.latencyInMs">LatencyInMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.probeConfigurationId">ProbeConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.startTime">StartTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.vantagePointName">VantagePointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults">DataOciHealthChecksPingProbeResultsPingProbeResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Connection`<sup>Required</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.connection"></a>

```csharp
public DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList Connection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList">DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList</a>

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.dns"></a>

```csharp
public DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList Dns { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList">DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList</a>

---

##### `DomainLookupEnd`<sup>Required</sup> <a name="DomainLookupEnd" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupEnd"></a>

```csharp
public double DomainLookupEnd { get; }
```

- *Type:* double

---

##### `DomainLookupStart`<sup>Required</sup> <a name="DomainLookupStart" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupStart"></a>

```csharp
public double DomainLookupStart { get; }
```

- *Type:* double

---

##### `ErrorCategory`<sup>Required</sup> <a name="ErrorCategory" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorCategory"></a>

```csharp
public string ErrorCategory { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.icmpCode"></a>

```csharp
public double IcmpCode { get; }
```

- *Type:* double

---

##### `IsHealthy`<sup>Required</sup> <a name="IsHealthy" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isHealthy"></a>

```csharp
public IResolvable IsHealthy { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsTimedOut`<sup>Required</sup> <a name="IsTimedOut" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isTimedOut"></a>

```csharp
public IResolvable IsTimedOut { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `LatencyInMs`<sup>Required</sup> <a name="LatencyInMs" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.latencyInMs"></a>

```csharp
public double LatencyInMs { get; }
```

- *Type:* double

---

##### `ProbeConfigurationId`<sup>Required</sup> <a name="ProbeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.probeConfigurationId"></a>

```csharp
public string ProbeConfigurationId { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.startTime"></a>

```csharp
public double StartTime { get; }
```

- *Type:* double

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `VantagePointName`<sup>Required</sup> <a name="VantagePointName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.vantagePointName"></a>

```csharp
public string VantagePointName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.internalValue"></a>

```csharp
public DataOciHealthChecksPingProbeResultsPingProbeResults InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults">DataOciHealthChecksPingProbeResultsPingProbeResults</a>

---



