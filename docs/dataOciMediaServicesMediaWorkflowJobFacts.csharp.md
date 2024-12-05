# `dataOciMediaServicesMediaWorkflowJobFacts` Submodule <a name="`dataOciMediaServicesMediaWorkflowJobFacts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesMediaWorkflowJobFacts <a name="DataOciMediaServicesMediaWorkflowJobFacts" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts oci_media_services_media_workflow_job_facts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowJobFacts(Construct Scope, string Id, DataOciMediaServicesMediaWorkflowJobFactsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig">DataOciMediaServicesMediaWorkflowJobFactsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig">DataOciMediaServicesMediaWorkflowJobFactsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKey` <a name="ResetKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowJobFacts resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesMediaWorkflowJobFacts.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesMediaWorkflowJobFacts.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesMediaWorkflowJobFacts.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesMediaWorkflowJobFacts.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowJobFacts resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMediaServicesMediaWorkflowJobFacts to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMediaServicesMediaWorkflowJobFacts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesMediaWorkflowJobFacts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList">DataOciMediaServicesMediaWorkflowJobFactsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.mediaWorkflowJobFactCollection">MediaWorkflowJobFactCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.mediaWorkflowJobIdInput">MediaWorkflowJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.mediaWorkflowJobId">MediaWorkflowJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.filter"></a>

```csharp
public DataOciMediaServicesMediaWorkflowJobFactsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList">DataOciMediaServicesMediaWorkflowJobFactsFilterList</a>

---

##### `MediaWorkflowJobFactCollection`<sup>Required</sup> <a name="MediaWorkflowJobFactCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.mediaWorkflowJobFactCollection"></a>

```csharp
public DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList MediaWorkflowJobFactCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MediaWorkflowJobIdInput`<sup>Optional</sup> <a name="MediaWorkflowJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.mediaWorkflowJobIdInput"></a>

```csharp
public string MediaWorkflowJobIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MediaWorkflowJobId`<sup>Required</sup> <a name="MediaWorkflowJobId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.mediaWorkflowJobId"></a>

```csharp
public string MediaWorkflowJobId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesMediaWorkflowJobFactsConfig <a name="DataOciMediaServicesMediaWorkflowJobFactsConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowJobFactsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MediaWorkflowJobId,
    object Filter = null,
    string Id = null,
    string Key = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.mediaWorkflowJobId">MediaWorkflowJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#media_workflow_job_id DataOciMediaServicesMediaWorkflowJobFacts#media_workflow_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#id DataOciMediaServicesMediaWorkflowJobFacts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#key DataOciMediaServicesMediaWorkflowJobFacts#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#type DataOciMediaServicesMediaWorkflowJobFacts#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MediaWorkflowJobId`<sup>Required</sup> <a name="MediaWorkflowJobId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.mediaWorkflowJobId"></a>

```csharp
public string MediaWorkflowJobId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#media_workflow_job_id DataOciMediaServicesMediaWorkflowJobFacts#media_workflow_job_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#filter DataOciMediaServicesMediaWorkflowJobFacts#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#id DataOciMediaServicesMediaWorkflowJobFacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#key DataOciMediaServicesMediaWorkflowJobFacts#key}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#type DataOciMediaServicesMediaWorkflowJobFacts#type}.

---

### DataOciMediaServicesMediaWorkflowJobFactsFilter <a name="DataOciMediaServicesMediaWorkflowJobFactsFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowJobFactsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#name DataOciMediaServicesMediaWorkflowJobFacts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#values DataOciMediaServicesMediaWorkflowJobFacts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#regex DataOciMediaServicesMediaWorkflowJobFacts#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#name DataOciMediaServicesMediaWorkflowJobFacts#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#values DataOciMediaServicesMediaWorkflowJobFacts#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#regex DataOciMediaServicesMediaWorkflowJobFacts#regex}.

---

### DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection <a name="DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection {

};
```


### DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems <a name="DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesMediaWorkflowJobFactsFilterList <a name="DataOciMediaServicesMediaWorkflowJobFactsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowJobFactsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.get"></a>

```csharp
private DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference <a name="DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList <a name="DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.get"></a>

```csharp
private DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference <a name="DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.detail">Detail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.mediaWorkflowJobId">MediaWorkflowJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Detail`<sup>Required</sup> <a name="Detail" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.detail"></a>

```csharp
public string Detail { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MediaWorkflowJobId`<sup>Required</sup> <a name="MediaWorkflowJobId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.mediaWorkflowJobId"></a>

```csharp
public string MediaWorkflowJobId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems</a>

---


### DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList <a name="DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.get"></a>

```csharp
private DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference <a name="DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.items"></a>

```csharp
public DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection</a>

---



