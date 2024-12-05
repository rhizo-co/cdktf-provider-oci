# `dataOciLogAnalyticsLogAnalyticsEntities` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsEntities` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsEntities <a name="DataOciLogAnalyticsLogAnalyticsEntities" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities oci_log_analytics_log_analytics_entities}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntities(Construct Scope, string Id, DataOciLogAnalyticsLogAnalyticsEntitiesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig">DataOciLogAnalyticsLogAnalyticsEntitiesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig">DataOciLogAnalyticsLogAnalyticsEntitiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetCloudResourceId">ResetCloudResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetEntityTypeName">ResetEntityTypeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetHostnameContains">ResetHostnameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetIsManagementAgentIdNull">ResetIsManagementAgentIdNull</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetLifecycleDetailsContains">ResetLifecycleDetailsContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetMetadataEquals">ResetMetadataEquals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetNameContains">ResetNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetSourceId">ResetSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCloudResourceId` <a name="ResetCloudResourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetCloudResourceId"></a>

```csharp
private void ResetCloudResourceId()
```

##### `ResetEntityTypeName` <a name="ResetEntityTypeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetEntityTypeName"></a>

```csharp
private void ResetEntityTypeName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetHostname` <a name="ResetHostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetHostnameContains` <a name="ResetHostnameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetHostnameContains"></a>

```csharp
private void ResetHostnameContains()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsManagementAgentIdNull` <a name="ResetIsManagementAgentIdNull" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetIsManagementAgentIdNull"></a>

```csharp
private void ResetIsManagementAgentIdNull()
```

##### `ResetLifecycleDetailsContains` <a name="ResetLifecycleDetailsContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetLifecycleDetailsContains"></a>

```csharp
private void ResetLifecycleDetailsContains()
```

##### `ResetMetadataEquals` <a name="ResetMetadataEquals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetMetadataEquals"></a>

```csharp
private void ResetMetadataEquals()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNameContains` <a name="ResetNameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetNameContains"></a>

```csharp
private void ResetNameContains()
```

##### `ResetSourceId` <a name="ResetSourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetSourceId"></a>

```csharp
private void ResetSourceId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntities resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsEntities.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsEntities.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsEntities.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLogAnalyticsLogAnalyticsEntities.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntities resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsEntities to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsLogAnalyticsEntities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsEntities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList">DataOciLogAnalyticsLogAnalyticsEntitiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.logAnalyticsEntityCollection">LogAnalyticsEntityCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cloudResourceIdInput">CloudResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.entityTypeNameInput">EntityTypeNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameContainsInput">HostnameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.isManagementAgentIdNullInput">IsManagementAgentIdNullInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycleDetailsContainsInput">LifecycleDetailsContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.metadataEqualsInput">MetadataEqualsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameContainsInput">NameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.sourceIdInput">SourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cloudResourceId">CloudResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.entityTypeName">EntityTypeName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameContains">HostnameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.isManagementAgentIdNull">IsManagementAgentIdNull</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycleDetailsContains">LifecycleDetailsContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.metadataEquals">MetadataEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameContains">NameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.sourceId">SourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.filter"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntitiesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList">DataOciLogAnalyticsLogAnalyticsEntitiesFilterList</a>

---

##### `LogAnalyticsEntityCollection`<sup>Required</sup> <a name="LogAnalyticsEntityCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.logAnalyticsEntityCollection"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList LogAnalyticsEntityCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList</a>

---

##### `CloudResourceIdInput`<sup>Optional</sup> <a name="CloudResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cloudResourceIdInput"></a>

```csharp
public string CloudResourceIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `EntityTypeNameInput`<sup>Optional</sup> <a name="EntityTypeNameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.entityTypeNameInput"></a>

```csharp
public string[] EntityTypeNameInput { get; }
```

- *Type:* string[]

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `HostnameContainsInput`<sup>Optional</sup> <a name="HostnameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameContainsInput"></a>

```csharp
public string HostnameContainsInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsManagementAgentIdNullInput`<sup>Optional</sup> <a name="IsManagementAgentIdNullInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.isManagementAgentIdNullInput"></a>

```csharp
public string IsManagementAgentIdNullInput { get; }
```

- *Type:* string

---

##### `LifecycleDetailsContainsInput`<sup>Optional</sup> <a name="LifecycleDetailsContainsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycleDetailsContainsInput"></a>

```csharp
public string LifecycleDetailsContainsInput { get; }
```

- *Type:* string

---

##### `MetadataEqualsInput`<sup>Optional</sup> <a name="MetadataEqualsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.metadataEqualsInput"></a>

```csharp
public string[] MetadataEqualsInput { get; }
```

- *Type:* string[]

---

##### `NameContainsInput`<sup>Optional</sup> <a name="NameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameContainsInput"></a>

```csharp
public string NameContainsInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `SourceIdInput`<sup>Optional</sup> <a name="SourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.sourceIdInput"></a>

```csharp
public string SourceIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CloudResourceId`<sup>Required</sup> <a name="CloudResourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cloudResourceId"></a>

```csharp
public string CloudResourceId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `EntityTypeName`<sup>Required</sup> <a name="EntityTypeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.entityTypeName"></a>

```csharp
public string[] EntityTypeName { get; }
```

- *Type:* string[]

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `HostnameContains`<sup>Required</sup> <a name="HostnameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameContains"></a>

```csharp
public string HostnameContains { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsManagementAgentIdNull`<sup>Required</sup> <a name="IsManagementAgentIdNull" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.isManagementAgentIdNull"></a>

```csharp
public string IsManagementAgentIdNull { get; }
```

- *Type:* string

---

##### `LifecycleDetailsContains`<sup>Required</sup> <a name="LifecycleDetailsContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycleDetailsContains"></a>

```csharp
public string LifecycleDetailsContains { get; }
```

- *Type:* string

---

##### `MetadataEquals`<sup>Required</sup> <a name="MetadataEquals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.metadataEquals"></a>

```csharp
public string[] MetadataEquals { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameContains`<sup>Required</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameContains"></a>

```csharp
public string NameContains { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.sourceId"></a>

```csharp
public string SourceId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsEntitiesConfig <a name="DataOciLogAnalyticsLogAnalyticsEntitiesConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntitiesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string Namespace,
    string CloudResourceId = null,
    string[] EntityTypeName = null,
    object Filter = null,
    string Hostname = null,
    string HostnameContains = null,
    string Id = null,
    string IsManagementAgentIdNull = null,
    string LifecycleDetailsContains = null,
    string[] MetadataEquals = null,
    string Name = null,
    string NameContains = null,
    string SourceId = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#compartment_id DataOciLogAnalyticsLogAnalyticsEntities#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#namespace DataOciLogAnalyticsLogAnalyticsEntities#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.cloudResourceId">CloudResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#cloud_resource_id DataOciLogAnalyticsLogAnalyticsEntities#cloud_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.entityTypeName">EntityTypeName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#entity_type_name DataOciLogAnalyticsLogAnalyticsEntities#entity_type_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.hostname">Hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname DataOciLogAnalyticsLogAnalyticsEntities#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.hostnameContains">HostnameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname_contains DataOciLogAnalyticsLogAnalyticsEntities#hostname_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#id DataOciLogAnalyticsLogAnalyticsEntities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.isManagementAgentIdNull">IsManagementAgentIdNull</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#is_management_agent_id_null DataOciLogAnalyticsLogAnalyticsEntities#is_management_agent_id_null}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.lifecycleDetailsContains">LifecycleDetailsContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#lifecycle_details_contains DataOciLogAnalyticsLogAnalyticsEntities#lifecycle_details_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.metadataEquals">MetadataEquals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#metadata_equals DataOciLogAnalyticsLogAnalyticsEntities#metadata_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.nameContains">NameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name_contains DataOciLogAnalyticsLogAnalyticsEntities#name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.sourceId">SourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#source_id DataOciLogAnalyticsLogAnalyticsEntities#source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#state DataOciLogAnalyticsLogAnalyticsEntities#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#compartment_id DataOciLogAnalyticsLogAnalyticsEntities#compartment_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#namespace DataOciLogAnalyticsLogAnalyticsEntities#namespace}.

---

##### `CloudResourceId`<sup>Optional</sup> <a name="CloudResourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.cloudResourceId"></a>

```csharp
public string CloudResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#cloud_resource_id DataOciLogAnalyticsLogAnalyticsEntities#cloud_resource_id}.

---

##### `EntityTypeName`<sup>Optional</sup> <a name="EntityTypeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.entityTypeName"></a>

```csharp
public string[] EntityTypeName { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#entity_type_name DataOciLogAnalyticsLogAnalyticsEntities#entity_type_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#filter DataOciLogAnalyticsLogAnalyticsEntities#filter}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname DataOciLogAnalyticsLogAnalyticsEntities#hostname}.

---

##### `HostnameContains`<sup>Optional</sup> <a name="HostnameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.hostnameContains"></a>

```csharp
public string HostnameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname_contains DataOciLogAnalyticsLogAnalyticsEntities#hostname_contains}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#id DataOciLogAnalyticsLogAnalyticsEntities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsManagementAgentIdNull`<sup>Optional</sup> <a name="IsManagementAgentIdNull" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.isManagementAgentIdNull"></a>

```csharp
public string IsManagementAgentIdNull { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#is_management_agent_id_null DataOciLogAnalyticsLogAnalyticsEntities#is_management_agent_id_null}.

---

##### `LifecycleDetailsContains`<sup>Optional</sup> <a name="LifecycleDetailsContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.lifecycleDetailsContains"></a>

```csharp
public string LifecycleDetailsContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#lifecycle_details_contains DataOciLogAnalyticsLogAnalyticsEntities#lifecycle_details_contains}.

---

##### `MetadataEquals`<sup>Optional</sup> <a name="MetadataEquals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.metadataEquals"></a>

```csharp
public string[] MetadataEquals { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#metadata_equals DataOciLogAnalyticsLogAnalyticsEntities#metadata_equals}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}.

---

##### `NameContains`<sup>Optional</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.nameContains"></a>

```csharp
public string NameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name_contains DataOciLogAnalyticsLogAnalyticsEntities#name_contains}.

---

##### `SourceId`<sup>Optional</sup> <a name="SourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.sourceId"></a>

```csharp
public string SourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#source_id DataOciLogAnalyticsLogAnalyticsEntities#source_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#state DataOciLogAnalyticsLogAnalyticsEntities#state}.

---

### DataOciLogAnalyticsLogAnalyticsEntitiesFilter <a name="DataOciLogAnalyticsLogAnalyticsEntitiesFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntitiesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#values DataOciLogAnalyticsLogAnalyticsEntities#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#regex DataOciLogAnalyticsLogAnalyticsEntities#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#values DataOciLogAnalyticsLogAnalyticsEntities#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#regex DataOciLogAnalyticsLogAnalyticsEntities#regex}.

---

### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection {

};
```


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems {

};
```


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata {

};
```


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsEntitiesFilterList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntitiesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.get"></a>

```csharp
private DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.get"></a>

```csharp
private DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.get"></a>

```csharp
private DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems</a>

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.get"></a>

```csharp
private DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.items"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata</a>

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.areLogsCollected">AreLogsCollected</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.cloudResourceId">CloudResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.entityTypeInternalName">EntityTypeInternalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.entityTypeName">EntityTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentCompartmentId">ManagementAgentCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentDisplayName">ManagementAgentDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentId">ManagementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.properties">Properties</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.sourceId">SourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeLastDiscovered">TimeLastDiscovered</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timezoneRegion">TimezoneRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AreLogsCollected`<sup>Required</sup> <a name="AreLogsCollected" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.areLogsCollected"></a>

```csharp
public IResolvable AreLogsCollected { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CloudResourceId`<sup>Required</sup> <a name="CloudResourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.cloudResourceId"></a>

```csharp
public string CloudResourceId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EntityTypeInternalName`<sup>Required</sup> <a name="EntityTypeInternalName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.entityTypeInternalName"></a>

```csharp
public string EntityTypeInternalName { get; }
```

- *Type:* string

---

##### `EntityTypeName`<sup>Required</sup> <a name="EntityTypeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.entityTypeName"></a>

```csharp
public string EntityTypeName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ManagementAgentCompartmentId`<sup>Required</sup> <a name="ManagementAgentCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentCompartmentId"></a>

```csharp
public string ManagementAgentCompartmentId { get; }
```

- *Type:* string

---

##### `ManagementAgentDisplayName`<sup>Required</sup> <a name="ManagementAgentDisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentDisplayName"></a>

```csharp
public string ManagementAgentDisplayName { get; }
```

- *Type:* string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentId"></a>

```csharp
public string ManagementAgentId { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.metadata"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList Metadata { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.properties"></a>

```csharp
public StringMap Properties { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.sourceId"></a>

```csharp
public string SourceId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeLastDiscovered`<sup>Required</sup> <a name="TimeLastDiscovered" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeLastDiscovered"></a>

```csharp
public string TimeLastDiscovered { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TimezoneRegion`<sup>Required</sup> <a name="TimezoneRegion" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timezoneRegion"></a>

```csharp
public string TimezoneRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems</a>

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.get"></a>

```csharp
private DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.items"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection</a>

---



