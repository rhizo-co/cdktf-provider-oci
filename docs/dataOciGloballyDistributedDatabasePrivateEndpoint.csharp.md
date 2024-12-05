# `dataOciGloballyDistributedDatabasePrivateEndpoint` Submodule <a name="`dataOciGloballyDistributedDatabasePrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGloballyDistributedDatabasePrivateEndpoint <a name="DataOciGloballyDistributedDatabasePrivateEndpoint" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_private_endpoint oci_globally_distributed_database_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabasePrivateEndpoint(Construct Scope, string Id, DataOciGloballyDistributedDatabasePrivateEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig">DataOciGloballyDistributedDatabasePrivateEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig">DataOciGloballyDistributedDatabasePrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGloballyDistributedDatabasePrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGloballyDistributedDatabasePrivateEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGloballyDistributedDatabasePrivateEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGloballyDistributedDatabasePrivateEndpoint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGloballyDistributedDatabasePrivateEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciGloballyDistributedDatabasePrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGloballyDistributedDatabasePrivateEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGloballyDistributedDatabasePrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGloballyDistributedDatabasePrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.lifecycleStateDetails">LifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.proxyComputeInstanceId">ProxyComputeInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.reinstateProxyInstanceTrigger">ReinstateProxyInstanceTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.shardedDatabases">ShardedDatabases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.vcnId">VcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.privateEndpointIdInput">PrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.privateEndpointId">PrivateEndpointId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleStateDetails`<sup>Required</sup> <a name="LifecycleStateDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.lifecycleStateDetails"></a>

```csharp
public string LifecycleStateDetails { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `ProxyComputeInstanceId`<sup>Required</sup> <a name="ProxyComputeInstanceId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.proxyComputeInstanceId"></a>

```csharp
public string ProxyComputeInstanceId { get; }
```

- *Type:* string

---

##### `ReinstateProxyInstanceTrigger`<sup>Required</sup> <a name="ReinstateProxyInstanceTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.reinstateProxyInstanceTrigger"></a>

```csharp
public double ReinstateProxyInstanceTrigger { get; }
```

- *Type:* double

---

##### `ShardedDatabases`<sup>Required</sup> <a name="ShardedDatabases" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.shardedDatabases"></a>

```csharp
public string[] ShardedDatabases { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.vcnId"></a>

```csharp
public string VcnId { get; }
```

- *Type:* string

---

##### `PrivateEndpointIdInput`<sup>Optional</sup> <a name="PrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.privateEndpointIdInput"></a>

```csharp
public string PrivateEndpointIdInput { get; }
```

- *Type:* string

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.privateEndpointId"></a>

```csharp
public string PrivateEndpointId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGloballyDistributedDatabasePrivateEndpointConfig <a name="DataOciGloballyDistributedDatabasePrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGloballyDistributedDatabasePrivateEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PrivateEndpointId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.privateEndpointId">PrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_private_endpoint#private_endpoint_id DataOciGloballyDistributedDatabasePrivateEndpoint#private_endpoint_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabasePrivateEndpoint.DataOciGloballyDistributedDatabasePrivateEndpointConfig.property.privateEndpointId"></a>

```csharp
public string PrivateEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_private_endpoint#private_endpoint_id DataOciGloballyDistributedDatabasePrivateEndpoint#private_endpoint_id}.

---



