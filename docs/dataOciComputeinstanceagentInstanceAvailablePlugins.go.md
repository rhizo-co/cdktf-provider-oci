# `dataOciComputeinstanceagentInstanceAvailablePlugins` Submodule <a name="`dataOciComputeinstanceagentInstanceAvailablePlugins` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeinstanceagentInstanceAvailablePlugins <a name="DataOciComputeinstanceagentInstanceAvailablePlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins oci_computeinstanceagent_instance_available_plugins}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputeinstanceagentinstanceavailableplugins"

dataocicomputeinstanceagentinstanceavailableplugins.NewDataOciComputeinstanceagentInstanceAvailablePlugins(scope Construct, id *string, config DataOciComputeinstanceagentInstanceAvailablePluginsConfig) DataOciComputeinstanceagentInstanceAvailablePlugins
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig">DataOciComputeinstanceagentInstanceAvailablePluginsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig">DataOciComputeinstanceagentInstanceAvailablePluginsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAvailablePlugins resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputeinstanceagentinstanceavailableplugins"

dataocicomputeinstanceagentinstanceavailableplugins.DataOciComputeinstanceagentInstanceAvailablePlugins_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputeinstanceagentinstanceavailableplugins"

dataocicomputeinstanceagentinstanceavailableplugins.DataOciComputeinstanceagentInstanceAvailablePlugins_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputeinstanceagentinstanceavailableplugins"

dataocicomputeinstanceagentinstanceavailableplugins.DataOciComputeinstanceagentInstanceAvailablePlugins_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputeinstanceagentinstanceavailableplugins"

dataocicomputeinstanceagentinstanceavailableplugins.DataOciComputeinstanceagentInstanceAvailablePlugins_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAvailablePlugins resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciComputeinstanceagentInstanceAvailablePlugins to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciComputeinstanceagentInstanceAvailablePlugins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeinstanceagentInstanceAvailablePlugins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.availablePlugins">AvailablePlugins</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList">DataOciComputeinstanceagentInstanceAvailablePluginsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osNameInput">OsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersionInput">OsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osName">OsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersion">OsVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AvailablePlugins`<sup>Required</sup> <a name="AvailablePlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.availablePlugins"></a>

```go
func AvailablePlugins() DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filter"></a>

```go
func Filter() DataOciComputeinstanceagentInstanceAvailablePluginsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList">DataOciComputeinstanceagentInstanceAvailablePluginsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OsNameInput`<sup>Optional</sup> <a name="OsNameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osNameInput"></a>

```go
func OsNameInput() *string
```

- *Type:* *string

---

##### `OsVersionInput`<sup>Optional</sup> <a name="OsVersionInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersionInput"></a>

```go
func OsVersionInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OsName`<sup>Required</sup> <a name="OsName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osName"></a>

```go
func OsName() *string
```

- *Type:* *string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersion"></a>

```go
func OsVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins <a name="DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputeinstanceagentinstanceavailableplugins"

&dataocicomputeinstanceagentinstanceavailableplugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins {

}
```


### DataOciComputeinstanceagentInstanceAvailablePluginsConfig <a name="DataOciComputeinstanceagentInstanceAvailablePluginsConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputeinstanceagentinstanceavailableplugins"

&dataocicomputeinstanceagentinstanceavailableplugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	OsName: *string,
	OsVersion: *string,
	Filter: interface{},
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#compartment_id DataOciComputeinstanceagentInstanceAvailablePlugins#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osName">OsName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_name DataOciComputeinstanceagentInstanceAvailablePlugins#os_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osVersion">OsVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_version DataOciComputeinstanceagentInstanceAvailablePlugins#os_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#id DataOciComputeinstanceagentInstanceAvailablePlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#compartment_id DataOciComputeinstanceagentInstanceAvailablePlugins#compartment_id}.

---

##### `OsName`<sup>Required</sup> <a name="OsName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osName"></a>

```go
OsName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_name DataOciComputeinstanceagentInstanceAvailablePlugins#os_name}.

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osVersion"></a>

```go
OsVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_version DataOciComputeinstanceagentInstanceAvailablePlugins#os_version}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#filter DataOciComputeinstanceagentInstanceAvailablePlugins#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#id DataOciComputeinstanceagentInstanceAvailablePlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}.

---

### DataOciComputeinstanceagentInstanceAvailablePluginsFilter <a name="DataOciComputeinstanceagentInstanceAvailablePluginsFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputeinstanceagentinstanceavailableplugins"

&dataocicomputeinstanceagentinstanceavailableplugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#values DataOciComputeinstanceagentInstanceAvailablePlugins#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#regex DataOciComputeinstanceagentInstanceAvailablePlugins#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#values DataOciComputeinstanceagentInstanceAvailablePlugins#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#regex DataOciComputeinstanceagentInstanceAvailablePlugins#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList <a name="DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputeinstanceagentinstanceavailableplugins"

dataocicomputeinstanceagentinstanceavailableplugins.NewDataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.get"></a>

```go
func Get(index *f64) DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference <a name="DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputeinstanceagentinstanceavailableplugins"

dataocicomputeinstanceagentinstanceavailableplugins.NewDataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isEnabledByDefault">IsEnabledByDefault</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isSupported">IsSupported</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabledByDefault`<sup>Required</sup> <a name="IsEnabledByDefault" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isEnabledByDefault"></a>

```go
func IsEnabledByDefault() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSupported`<sup>Required</sup> <a name="IsSupported" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isSupported"></a>

```go
func IsSupported() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins</a>

---


### DataOciComputeinstanceagentInstanceAvailablePluginsFilterList <a name="DataOciComputeinstanceagentInstanceAvailablePluginsFilterList" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputeinstanceagentinstanceavailableplugins"

dataocicomputeinstanceagentinstanceavailableplugins.NewDataOciComputeinstanceagentInstanceAvailablePluginsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciComputeinstanceagentInstanceAvailablePluginsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.get"></a>

```go
func Get(index *f64) DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference <a name="DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputeinstanceagentinstanceavailableplugins"

dataocicomputeinstanceagentinstanceavailableplugins.NewDataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



