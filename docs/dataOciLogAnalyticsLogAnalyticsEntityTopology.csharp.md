# `dataOciLogAnalyticsLogAnalyticsEntityTopology` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsEntityTopology` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsEntityTopology <a name="DataOciLogAnalyticsLogAnalyticsEntityTopology" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology oci_log_analytics_log_analytics_entity_topology}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntityTopology(Construct Scope, string Id, DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig">DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig">DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetMetadataEquals">ResetMetadataEquals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetadataEquals` <a name="ResetMetadataEquals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetMetadataEquals"></a>

```csharp
private void ResetMetadataEquals()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntityTopology resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsEntityTopology.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsEntityTopology.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsEntityTopology.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsEntityTopology.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntityTopology resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsEntityTopology to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsLogAnalyticsEntityTopology that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsEntityTopology to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.logAnalyticsEntityIdInput">LogAnalyticsEntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.metadataEqualsInput">MetadataEqualsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.logAnalyticsEntityId">LogAnalyticsEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.metadataEquals">MetadataEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.items"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsEntityIdInput`<sup>Optional</sup> <a name="LogAnalyticsEntityIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.logAnalyticsEntityIdInput"></a>

```csharp
public string LogAnalyticsEntityIdInput { get; }
```

- *Type:* string

---

##### `MetadataEqualsInput`<sup>Optional</sup> <a name="MetadataEqualsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.metadataEqualsInput"></a>

```csharp
public string[] MetadataEqualsInput { get; }
```

- *Type:* string[]

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogAnalyticsEntityId`<sup>Required</sup> <a name="LogAnalyticsEntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.logAnalyticsEntityId"></a>

```csharp
public string LogAnalyticsEntityId { get; }
```

- *Type:* string

---

##### `MetadataEquals`<sup>Required</sup> <a name="MetadataEquals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.metadataEquals"></a>

```csharp
public string[] MetadataEquals { get; }
```

- *Type:* string[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LogAnalyticsEntityId,
    string Namespace,
    string Id = null,
    string[] MetadataEquals = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.logAnalyticsEntityId">LogAnalyticsEntityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#log_analytics_entity_id DataOciLogAnalyticsLogAnalyticsEntityTopology#log_analytics_entity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#namespace DataOciLogAnalyticsLogAnalyticsEntityTopology#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#id DataOciLogAnalyticsLogAnalyticsEntityTopology#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.metadataEquals">MetadataEquals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#metadata_equals DataOciLogAnalyticsLogAnalyticsEntityTopology#metadata_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#state DataOciLogAnalyticsLogAnalyticsEntityTopology#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LogAnalyticsEntityId`<sup>Required</sup> <a name="LogAnalyticsEntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.logAnalyticsEntityId"></a>

```csharp
public string LogAnalyticsEntityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#log_analytics_entity_id DataOciLogAnalyticsLogAnalyticsEntityTopology#log_analytics_entity_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#namespace DataOciLogAnalyticsLogAnalyticsEntityTopology#namespace}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#id DataOciLogAnalyticsLogAnalyticsEntityTopology#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetadataEquals`<sup>Optional</sup> <a name="MetadataEquals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.metadataEquals"></a>

```csharp
public string[] MetadataEquals { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#metadata_equals DataOciLogAnalyticsLogAnalyticsEntityTopology#metadata_equals}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#state DataOciLogAnalyticsLogAnalyticsEntityTopology#state}.

---

### DataOciLogAnalyticsLogAnalyticsEntityTopologyItems <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntityTopologyItems {

};
```


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks {

};
```


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems {

};
```


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes {

};
```


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.get"></a>

```csharp
private DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.destinationEntityId">DestinationEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.sourceEntityId">SourceEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationEntityId`<sup>Required</sup> <a name="DestinationEntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.destinationEntityId"></a>

```csharp
public string DestinationEntityId { get; }
```

- *Type:* string

---

##### `SourceEntityId`<sup>Required</sup> <a name="SourceEntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.sourceEntityId"></a>

```csharp
public string SourceEntityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems</a>

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.get"></a>

```csharp
private DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.items"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks</a>

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.get"></a>

```csharp
private DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.get"></a>

```csharp
private DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.areLogsCollected">AreLogsCollected</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.cloudResourceId">CloudResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.entityTypeInternalName">EntityTypeInternalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.entityTypeName">EntityTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.managementAgentId">ManagementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.sourceId">SourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.timezoneRegion">TimezoneRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AreLogsCollected`<sup>Required</sup> <a name="AreLogsCollected" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.areLogsCollected"></a>

```csharp
public IResolvable AreLogsCollected { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CloudResourceId`<sup>Required</sup> <a name="CloudResourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.cloudResourceId"></a>

```csharp
public string CloudResourceId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EntityTypeInternalName`<sup>Required</sup> <a name="EntityTypeInternalName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.entityTypeInternalName"></a>

```csharp
public string EntityTypeInternalName { get; }
```

- *Type:* string

---

##### `EntityTypeName`<sup>Required</sup> <a name="EntityTypeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.entityTypeName"></a>

```csharp
public string EntityTypeName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.managementAgentId"></a>

```csharp
public string ManagementAgentId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.sourceId"></a>

```csharp
public string SourceId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TimezoneRegion`<sup>Required</sup> <a name="TimezoneRegion" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.timezoneRegion"></a>

```csharp
public string TimezoneRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems</a>

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.get"></a>

```csharp
private DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.items"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes</a>

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.links">Links</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.nodes">Nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItems">DataOciLogAnalyticsLogAnalyticsEntityTopologyItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Links`<sup>Required</sup> <a name="Links" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.links"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList Links { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList</a>

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.nodes"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList Nodes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntityTopologyItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItems">DataOciLogAnalyticsLogAnalyticsEntityTopologyItems</a>

---



