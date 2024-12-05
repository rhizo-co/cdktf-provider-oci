# `dataOciCapacityManagementOccCapacityRequest` Submodule <a name="`dataOciCapacityManagementOccCapacityRequest` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccCapacityRequest <a name="DataOciCapacityManagementOccCapacityRequest" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_request oci_capacity_management_occ_capacity_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequest(Construct Scope, string Id, DataOciCapacityManagementOccCapacityRequestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig">DataOciCapacityManagementOccCapacityRequestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig">DataOciCapacityManagementOccCapacityRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccCapacityRequest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccCapacityRequest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccCapacityRequest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccCapacityRequest.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccCapacityRequest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCapacityManagementOccCapacityRequest resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCapacityManagementOccCapacityRequest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCapacityManagementOccCapacityRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_request#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccCapacityRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandover">DateExpectedCapacityHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList">DataOciCapacityManagementOccCapacityRequestDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occAvailabilityCatalogId">OccAvailabilityCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occCustomerGroupId">OccCustomerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.patchOperations">PatchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList">DataOciCapacityManagementOccCapacityRequestPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.requestState">RequestState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.requestType">RequestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occCapacityRequestIdInput">OccCapacityRequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occCapacityRequestId">OccCapacityRequestId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DateExpectedCapacityHandover`<sup>Required</sup> <a name="DateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandover"></a>

```csharp
public string DateExpectedCapacityHandover { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.details"></a>

```csharp
public DataOciCapacityManagementOccCapacityRequestDetailsList Details { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList">DataOciCapacityManagementOccCapacityRequestDetailsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OccAvailabilityCatalogId`<sup>Required</sup> <a name="OccAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occAvailabilityCatalogId"></a>

```csharp
public string OccAvailabilityCatalogId { get; }
```

- *Type:* string

---

##### `OccCustomerGroupId`<sup>Required</sup> <a name="OccCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occCustomerGroupId"></a>

```csharp
public string OccCustomerGroupId { get; }
```

- *Type:* string

---

##### `PatchOperations`<sup>Required</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.patchOperations"></a>

```csharp
public DataOciCapacityManagementOccCapacityRequestPatchOperationsList PatchOperations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList">DataOciCapacityManagementOccCapacityRequestPatchOperationsList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RequestState`<sup>Required</sup> <a name="RequestState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.requestState"></a>

```csharp
public string RequestState { get; }
```

- *Type:* string

---

##### `RequestType`<sup>Required</sup> <a name="RequestType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.requestType"></a>

```csharp
public string RequestType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `OccCapacityRequestIdInput`<sup>Optional</sup> <a name="OccCapacityRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occCapacityRequestIdInput"></a>

```csharp
public string OccCapacityRequestIdInput { get; }
```

- *Type:* string

---

##### `OccCapacityRequestId`<sup>Required</sup> <a name="OccCapacityRequestId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occCapacityRequestId"></a>

```csharp
public string OccCapacityRequestId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccCapacityRequestConfig <a name="DataOciCapacityManagementOccCapacityRequestConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string OccCapacityRequestId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.occCapacityRequestId">OccCapacityRequestId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_request#occ_capacity_request_id DataOciCapacityManagementOccCapacityRequest#occ_capacity_request_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OccCapacityRequestId`<sup>Required</sup> <a name="OccCapacityRequestId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.occCapacityRequestId"></a>

```csharp
public string OccCapacityRequestId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_request#occ_capacity_request_id DataOciCapacityManagementOccCapacityRequest#occ_capacity_request_id}.

---

### DataOciCapacityManagementOccCapacityRequestDetails <a name="DataOciCapacityManagementOccCapacityRequestDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestDetails {

};
```


### DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct <a name="DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct {

};
```


### DataOciCapacityManagementOccCapacityRequestPatchOperations <a name="DataOciCapacityManagementOccCapacityRequestPatchOperations" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestPatchOperations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList <a name="DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get"></a>

```csharp
private DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference <a name="DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity">HandoverQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId">OccHandoverResourceBlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HandoverQuantity`<sup>Required</sup> <a name="HandoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity"></a>

```csharp
public string HandoverQuantity { get; }
```

- *Type:* string

---

##### `OccHandoverResourceBlockId`<sup>Required</sup> <a name="OccHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId"></a>

```csharp
public string OccHandoverResourceBlockId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue"></a>

```csharp
public DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>

---


### DataOciCapacityManagementOccCapacityRequestDetailsList <a name="DataOciCapacityManagementOccCapacityRequestDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.get"></a>

```csharp
private DataOciCapacityManagementOccCapacityRequestDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCapacityManagementOccCapacityRequestDetailsOutputReference <a name="DataOciCapacityManagementOccCapacityRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantity">ActualHandoverQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockList">AssociatedOccHandoverResourceBlockList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList">DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandover">DateActualHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandover">DateExpectedHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantity">DemandQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantity">ExpectedHandoverQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadType">SourceWorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadType">WorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetails">DataOciCapacityManagementOccCapacityRequestDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActualHandoverQuantity`<sup>Required</sup> <a name="ActualHandoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantity"></a>

```csharp
public string ActualHandoverQuantity { get; }
```

- *Type:* string

---

##### `AssociatedOccHandoverResourceBlockList`<sup>Required</sup> <a name="AssociatedOccHandoverResourceBlockList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockList"></a>

```csharp
public DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList AssociatedOccHandoverResourceBlockList { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList">DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList</a>

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `DateActualHandover`<sup>Required</sup> <a name="DateActualHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandover"></a>

```csharp
public string DateActualHandover { get; }
```

- *Type:* string

---

##### `DateExpectedHandover`<sup>Required</sup> <a name="DateExpectedHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandover"></a>

```csharp
public string DateExpectedHandover { get; }
```

- *Type:* string

---

##### `DemandQuantity`<sup>Required</sup> <a name="DemandQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantity"></a>

```csharp
public string DemandQuantity { get; }
```

- *Type:* string

---

##### `ExpectedHandoverQuantity`<sup>Required</sup> <a name="ExpectedHandoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantity"></a>

```csharp
public string ExpectedHandoverQuantity { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `SourceWorkloadType`<sup>Required</sup> <a name="SourceWorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadType"></a>

```csharp
public string SourceWorkloadType { get; }
```

- *Type:* string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadType"></a>

```csharp
public string WorkloadType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciCapacityManagementOccCapacityRequestDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetails">DataOciCapacityManagementOccCapacityRequestDetails</a>

---


### DataOciCapacityManagementOccCapacityRequestPatchOperationsList <a name="DataOciCapacityManagementOccCapacityRequestPatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestPatchOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.get"></a>

```csharp
private DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference <a name="DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.position">Position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItem">SelectedItem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selection">Selection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.value">Value</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperations">DataOciCapacityManagementOccCapacityRequestPatchOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.position"></a>

```csharp
public string Position { get; }
```

- *Type:* string

---

##### `SelectedItem`<sup>Required</sup> <a name="SelectedItem" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItem"></a>

```csharp
public string SelectedItem { get; }
```

- *Type:* string

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selection"></a>

```csharp
public string Selection { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.value"></a>

```csharp
public StringMap Value { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.internalValue"></a>

```csharp
public DataOciCapacityManagementOccCapacityRequestPatchOperations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperations">DataOciCapacityManagementOccCapacityRequestPatchOperations</a>

---



