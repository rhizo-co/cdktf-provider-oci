# `dataOciKmsKeyVersions` Submodule <a name="`dataOciKmsKeyVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciKmsKeyVersions <a name="DataOciKmsKeyVersions" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_key_versions oci_kms_key_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciKmsKeyVersions(Construct Scope, string Id, DataOciKmsKeyVersionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig">DataOciKmsKeyVersionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig">DataOciKmsKeyVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciKmsKeyVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciKmsKeyVersions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciKmsKeyVersions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciKmsKeyVersions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciKmsKeyVersions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciKmsKeyVersions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciKmsKeyVersions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciKmsKeyVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_key_versions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciKmsKeyVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList">DataOciKmsKeyVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.keyVersions">KeyVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList">DataOciKmsKeyVersionsKeyVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.managementEndpointInput">ManagementEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.managementEndpoint">ManagementEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.filter"></a>

```csharp
public DataOciKmsKeyVersionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList">DataOciKmsKeyVersionsFilterList</a>

---

##### `KeyVersions`<sup>Required</sup> <a name="KeyVersions" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.keyVersions"></a>

```csharp
public DataOciKmsKeyVersionsKeyVersionsList KeyVersions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList">DataOciKmsKeyVersionsKeyVersionsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `ManagementEndpointInput`<sup>Optional</sup> <a name="ManagementEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.managementEndpointInput"></a>

```csharp
public string ManagementEndpointInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `ManagementEndpoint`<sup>Required</sup> <a name="ManagementEndpoint" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.managementEndpoint"></a>

```csharp
public string ManagementEndpoint { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciKmsKeyVersionsConfig <a name="DataOciKmsKeyVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciKmsKeyVersionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KeyId,
    string ManagementEndpoint,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.keyId">KeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_key_versions#key_id DataOciKmsKeyVersions#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.managementEndpoint">ManagementEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_key_versions#management_endpoint DataOciKmsKeyVersions#management_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_key_versions#id DataOciKmsKeyVersions#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_key_versions#key_id DataOciKmsKeyVersions#key_id}.

---

##### `ManagementEndpoint`<sup>Required</sup> <a name="ManagementEndpoint" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.managementEndpoint"></a>

```csharp
public string ManagementEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_key_versions#management_endpoint DataOciKmsKeyVersions#management_endpoint}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_key_versions#filter DataOciKmsKeyVersions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_key_versions#id DataOciKmsKeyVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciKmsKeyVersionsFilter <a name="DataOciKmsKeyVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciKmsKeyVersionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_key_versions#name DataOciKmsKeyVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_key_versions#values DataOciKmsKeyVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_key_versions#regex DataOciKmsKeyVersions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_key_versions#name DataOciKmsKeyVersions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_key_versions#values DataOciKmsKeyVersions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_key_versions#regex DataOciKmsKeyVersions#regex}.

---

### DataOciKmsKeyVersionsKeyVersions <a name="DataOciKmsKeyVersionsKeyVersions" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciKmsKeyVersionsKeyVersions {

};
```


### DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetails <a name="DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetails" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetails {

};
```


### DataOciKmsKeyVersionsKeyVersionsReplicaDetails <a name="DataOciKmsKeyVersionsKeyVersionsReplicaDetails" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciKmsKeyVersionsKeyVersionsReplicaDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciKmsKeyVersionsFilterList <a name="DataOciKmsKeyVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciKmsKeyVersionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.get"></a>

```csharp
private DataOciKmsKeyVersionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciKmsKeyVersionsFilterOutputReference <a name="DataOciKmsKeyVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciKmsKeyVersionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList <a name="DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.get"></a>

```csharp
private DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference <a name="DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.property.externalKeyId">ExternalKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.property.externalKeyVersionId">ExternalKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetails">DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalKeyId`<sup>Required</sup> <a name="ExternalKeyId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.property.externalKeyId"></a>

```csharp
public string ExternalKeyId { get; }
```

- *Type:* string

---

##### `ExternalKeyVersionId`<sup>Required</sup> <a name="ExternalKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.property.externalKeyVersionId"></a>

```csharp
public string ExternalKeyVersionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetails">DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetails</a>

---


### DataOciKmsKeyVersionsKeyVersionsList <a name="DataOciKmsKeyVersionsKeyVersionsList" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciKmsKeyVersionsKeyVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.get"></a>

```csharp
private DataOciKmsKeyVersionsKeyVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciKmsKeyVersionsKeyVersionsOutputReference <a name="DataOciKmsKeyVersionsKeyVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciKmsKeyVersionsKeyVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.externalKeyReferenceDetails">ExternalKeyReferenceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList">DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.externalKeyVersionId">ExternalKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.isAutoRotated">IsAutoRotated</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.isPrimary">IsPrimary</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.keyVersionId">KeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.managementEndpoint">ManagementEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.replicaDetails">ReplicaDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList">DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.restoredFromKeyId">RestoredFromKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.restoredFromKeyVersionId">RestoredFromKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersions">DataOciKmsKeyVersionsKeyVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ExternalKeyReferenceDetails`<sup>Required</sup> <a name="ExternalKeyReferenceDetails" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.externalKeyReferenceDetails"></a>

```csharp
public DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList ExternalKeyReferenceDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList">DataOciKmsKeyVersionsKeyVersionsExternalKeyReferenceDetailsList</a>

---

##### `ExternalKeyVersionId`<sup>Required</sup> <a name="ExternalKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.externalKeyVersionId"></a>

```csharp
public string ExternalKeyVersionId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAutoRotated`<sup>Required</sup> <a name="IsAutoRotated" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.isAutoRotated"></a>

```csharp
public IResolvable IsAutoRotated { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.isPrimary"></a>

```csharp
public IResolvable IsPrimary { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `KeyVersionId`<sup>Required</sup> <a name="KeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.keyVersionId"></a>

```csharp
public string KeyVersionId { get; }
```

- *Type:* string

---

##### `ManagementEndpoint`<sup>Required</sup> <a name="ManagementEndpoint" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.managementEndpoint"></a>

```csharp
public string ManagementEndpoint { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `ReplicaDetails`<sup>Required</sup> <a name="ReplicaDetails" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.replicaDetails"></a>

```csharp
public DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList ReplicaDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList">DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList</a>

---

##### `RestoredFromKeyId`<sup>Required</sup> <a name="RestoredFromKeyId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.restoredFromKeyId"></a>

```csharp
public string RestoredFromKeyId { get; }
```

- *Type:* string

---

##### `RestoredFromKeyVersionId`<sup>Required</sup> <a name="RestoredFromKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.restoredFromKeyVersionId"></a>

```csharp
public string RestoredFromKeyVersionId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.timeOfDeletion"></a>

```csharp
public string TimeOfDeletion { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsOutputReference.property.internalValue"></a>

```csharp
public DataOciKmsKeyVersionsKeyVersions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersions">DataOciKmsKeyVersionsKeyVersions</a>

---


### DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList <a name="DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.get"></a>

```csharp
private DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference <a name="DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.property.replicationId">ReplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetails">DataOciKmsKeyVersionsKeyVersionsReplicaDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReplicationId`<sup>Required</sup> <a name="ReplicationId" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.property.replicationId"></a>

```csharp
public string ReplicationId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciKmsKeyVersionsKeyVersionsReplicaDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsKeyVersions.DataOciKmsKeyVersionsKeyVersionsReplicaDetails">DataOciKmsKeyVersionsKeyVersionsReplicaDetails</a>

---



