# `dataOciDataflowInvokeRun` Submodule <a name="`dataOciDataflowInvokeRun` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataflowInvokeRun <a name="DataOciDataflowInvokeRun" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_run oci_dataflow_invoke_run}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowinvokerun"

dataocidataflowinvokerun.NewDataOciDataflowInvokeRun(scope Construct, id *string, config DataOciDataflowInvokeRunConfig) DataOciDataflowInvokeRun
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig">DataOciDataflowInvokeRunConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig">DataOciDataflowInvokeRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataflowInvokeRun resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowinvokerun"

dataocidataflowinvokerun.DataOciDataflowInvokeRun_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowinvokerun"

dataocidataflowinvokerun.DataOciDataflowInvokeRun_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowinvokerun"

dataocidataflowinvokerun.DataOciDataflowInvokeRun_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowinvokerun"

dataocidataflowinvokerun.DataOciDataflowInvokeRun_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataflowInvokeRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataflowInvokeRun to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataflowInvokeRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataflowInvokeRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.applicationLogConfig">ApplicationLogConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList">DataOciDataflowInvokeRunApplicationLogConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.archiveUri">ArchiveUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.arguments">Arguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.asynchronous">Asynchronous</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.className">ClassName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.configuration">Configuration</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.dataReadInBytes">DataReadInBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.dataWrittenInBytes">DataWrittenInBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.driverShape">DriverShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.driverShapeConfig">DriverShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList">DataOciDataflowInvokeRunDriverShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.execute">Execute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.executorShape">ExecutorShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.executorShapeConfig">ExecutorShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList">DataOciDataflowInvokeRunExecutorShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.fileUri">FileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.logsBucketUri">LogsBucketUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.maxDurationInMinutes">MaxDurationInMinutes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.numExecutors">NumExecutors</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.opcParentRptUrl">OpcParentRptUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.opcRequestId">OpcRequestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.ownerPrincipalId">OwnerPrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.ownerUserName">OwnerUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.parameters">Parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList">DataOciDataflowInvokeRunParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.poolId">PoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointDnsZones">PrivateEndpointDnsZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointMaxHostCount">PrivateEndpointMaxHostCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointNsgIds">PrivateEndpointNsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointSubnetId">PrivateEndpointSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.runDurationInMilliseconds">RunDurationInMilliseconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.sparkVersion">SparkVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.totalOcpu">TotalOcpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.warehouseBucketUri">WarehouseBucketUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.runIdInput">RunIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.runId">RunId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `ApplicationLogConfig`<sup>Required</sup> <a name="ApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.applicationLogConfig"></a>

```go
func ApplicationLogConfig() DataOciDataflowInvokeRunApplicationLogConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList">DataOciDataflowInvokeRunApplicationLogConfigList</a>

---

##### `ArchiveUri`<sup>Required</sup> <a name="ArchiveUri" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.archiveUri"></a>

```go
func ArchiveUri() *string
```

- *Type:* *string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.arguments"></a>

```go
func Arguments() *[]*string
```

- *Type:* *[]*string

---

##### `Asynchronous`<sup>Required</sup> <a name="Asynchronous" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.asynchronous"></a>

```go
func Asynchronous() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.className"></a>

```go
func ClassName() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.configuration"></a>

```go
func Configuration() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DataReadInBytes`<sup>Required</sup> <a name="DataReadInBytes" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.dataReadInBytes"></a>

```go
func DataReadInBytes() *string
```

- *Type:* *string

---

##### `DataWrittenInBytes`<sup>Required</sup> <a name="DataWrittenInBytes" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.dataWrittenInBytes"></a>

```go
func DataWrittenInBytes() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DriverShape`<sup>Required</sup> <a name="DriverShape" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.driverShape"></a>

```go
func DriverShape() *string
```

- *Type:* *string

---

##### `DriverShapeConfig`<sup>Required</sup> <a name="DriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.driverShapeConfig"></a>

```go
func DriverShapeConfig() DataOciDataflowInvokeRunDriverShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList">DataOciDataflowInvokeRunDriverShapeConfigList</a>

---

##### `Execute`<sup>Required</sup> <a name="Execute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.execute"></a>

```go
func Execute() *string
```

- *Type:* *string

---

##### `ExecutorShape`<sup>Required</sup> <a name="ExecutorShape" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.executorShape"></a>

```go
func ExecutorShape() *string
```

- *Type:* *string

---

##### `ExecutorShapeConfig`<sup>Required</sup> <a name="ExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.executorShapeConfig"></a>

```go
func ExecutorShapeConfig() DataOciDataflowInvokeRunExecutorShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList">DataOciDataflowInvokeRunExecutorShapeConfigList</a>

---

##### `FileUri`<sup>Required</sup> <a name="FileUri" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.fileUri"></a>

```go
func FileUri() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdleTimeoutInMinutes`<sup>Required</sup> <a name="IdleTimeoutInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.idleTimeoutInMinutes"></a>

```go
func IdleTimeoutInMinutes() *string
```

- *Type:* *string

---

##### `Language`<sup>Required</sup> <a name="Language" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LogsBucketUri`<sup>Required</sup> <a name="LogsBucketUri" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.logsBucketUri"></a>

```go
func LogsBucketUri() *string
```

- *Type:* *string

---

##### `MaxDurationInMinutes`<sup>Required</sup> <a name="MaxDurationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.maxDurationInMinutes"></a>

```go
func MaxDurationInMinutes() *string
```

- *Type:* *string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `NumExecutors`<sup>Required</sup> <a name="NumExecutors" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.numExecutors"></a>

```go
func NumExecutors() *f64
```

- *Type:* *f64

---

##### `OpcParentRptUrl`<sup>Required</sup> <a name="OpcParentRptUrl" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.opcParentRptUrl"></a>

```go
func OpcParentRptUrl() *string
```

- *Type:* *string

---

##### `OpcRequestId`<sup>Required</sup> <a name="OpcRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.opcRequestId"></a>

```go
func OpcRequestId() *string
```

- *Type:* *string

---

##### `OwnerPrincipalId`<sup>Required</sup> <a name="OwnerPrincipalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.ownerPrincipalId"></a>

```go
func OwnerPrincipalId() *string
```

- *Type:* *string

---

##### `OwnerUserName`<sup>Required</sup> <a name="OwnerUserName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.ownerUserName"></a>

```go
func OwnerUserName() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.parameters"></a>

```go
func Parameters() DataOciDataflowInvokeRunParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList">DataOciDataflowInvokeRunParametersList</a>

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.poolId"></a>

```go
func PoolId() *string
```

- *Type:* *string

---

##### `PrivateEndpointDnsZones`<sup>Required</sup> <a name="PrivateEndpointDnsZones" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointDnsZones"></a>

```go
func PrivateEndpointDnsZones() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointId"></a>

```go
func PrivateEndpointId() *string
```

- *Type:* *string

---

##### `PrivateEndpointMaxHostCount`<sup>Required</sup> <a name="PrivateEndpointMaxHostCount" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointMaxHostCount"></a>

```go
func PrivateEndpointMaxHostCount() *f64
```

- *Type:* *f64

---

##### `PrivateEndpointNsgIds`<sup>Required</sup> <a name="PrivateEndpointNsgIds" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointNsgIds"></a>

```go
func PrivateEndpointNsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateEndpointSubnetId`<sup>Required</sup> <a name="PrivateEndpointSubnetId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointSubnetId"></a>

```go
func PrivateEndpointSubnetId() *string
```

- *Type:* *string

---

##### `RunDurationInMilliseconds`<sup>Required</sup> <a name="RunDurationInMilliseconds" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.runDurationInMilliseconds"></a>

```go
func RunDurationInMilliseconds() *string
```

- *Type:* *string

---

##### `SparkVersion`<sup>Required</sup> <a name="SparkVersion" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.sparkVersion"></a>

```go
func SparkVersion() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TotalOcpu`<sup>Required</sup> <a name="TotalOcpu" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.totalOcpu"></a>

```go
func TotalOcpu() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `WarehouseBucketUri`<sup>Required</sup> <a name="WarehouseBucketUri" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.warehouseBucketUri"></a>

```go
func WarehouseBucketUri() *string
```

- *Type:* *string

---

##### `RunIdInput`<sup>Optional</sup> <a name="RunIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.runIdInput"></a>

```go
func RunIdInput() *string
```

- *Type:* *string

---

##### `RunId`<sup>Required</sup> <a name="RunId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.runId"></a>

```go
func RunId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataflowInvokeRunApplicationLogConfig <a name="DataOciDataflowInvokeRunApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowinvokerun"

&dataocidataflowinvokerun.DataOciDataflowInvokeRunApplicationLogConfig {

}
```


### DataOciDataflowInvokeRunConfig <a name="DataOciDataflowInvokeRunConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowinvokerun"

&dataocidataflowinvokerun.DataOciDataflowInvokeRunConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RunId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.runId">RunId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_run#run_id DataOciDataflowInvokeRun#run_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RunId`<sup>Required</sup> <a name="RunId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.runId"></a>

```go
RunId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_run#run_id DataOciDataflowInvokeRun#run_id}.

---

### DataOciDataflowInvokeRunDriverShapeConfig <a name="DataOciDataflowInvokeRunDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowinvokerun"

&dataocidataflowinvokerun.DataOciDataflowInvokeRunDriverShapeConfig {

}
```


### DataOciDataflowInvokeRunExecutorShapeConfig <a name="DataOciDataflowInvokeRunExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowinvokerun"

&dataocidataflowinvokerun.DataOciDataflowInvokeRunExecutorShapeConfig {

}
```


### DataOciDataflowInvokeRunParameters <a name="DataOciDataflowInvokeRunParameters" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowinvokerun"

&dataocidataflowinvokerun.DataOciDataflowInvokeRunParameters {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataflowInvokeRunApplicationLogConfigList <a name="DataOciDataflowInvokeRunApplicationLogConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowinvokerun"

dataocidataflowinvokerun.NewDataOciDataflowInvokeRunApplicationLogConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataflowInvokeRunApplicationLogConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.get"></a>

```go
func Get(index *f64) DataOciDataflowInvokeRunApplicationLogConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataflowInvokeRunApplicationLogConfigOutputReference <a name="DataOciDataflowInvokeRunApplicationLogConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowinvokerun"

dataocidataflowinvokerun.NewDataOciDataflowInvokeRunApplicationLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataflowInvokeRunApplicationLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.logId">LogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfig">DataOciDataflowInvokeRunApplicationLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.logGroupId"></a>

```go
func LogGroupId() *string
```

- *Type:* *string

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.logId"></a>

```go
func LogId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataflowInvokeRunApplicationLogConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfig">DataOciDataflowInvokeRunApplicationLogConfig</a>

---


### DataOciDataflowInvokeRunDriverShapeConfigList <a name="DataOciDataflowInvokeRunDriverShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowinvokerun"

dataocidataflowinvokerun.NewDataOciDataflowInvokeRunDriverShapeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataflowInvokeRunDriverShapeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.get"></a>

```go
func Get(index *f64) DataOciDataflowInvokeRunDriverShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataflowInvokeRunDriverShapeConfigOutputReference <a name="DataOciDataflowInvokeRunDriverShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowinvokerun"

dataocidataflowinvokerun.NewDataOciDataflowInvokeRunDriverShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataflowInvokeRunDriverShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfig">DataOciDataflowInvokeRunDriverShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataflowInvokeRunDriverShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfig">DataOciDataflowInvokeRunDriverShapeConfig</a>

---


### DataOciDataflowInvokeRunExecutorShapeConfigList <a name="DataOciDataflowInvokeRunExecutorShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowinvokerun"

dataocidataflowinvokerun.NewDataOciDataflowInvokeRunExecutorShapeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataflowInvokeRunExecutorShapeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.get"></a>

```go
func Get(index *f64) DataOciDataflowInvokeRunExecutorShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataflowInvokeRunExecutorShapeConfigOutputReference <a name="DataOciDataflowInvokeRunExecutorShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowinvokerun"

dataocidataflowinvokerun.NewDataOciDataflowInvokeRunExecutorShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataflowInvokeRunExecutorShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfig">DataOciDataflowInvokeRunExecutorShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataflowInvokeRunExecutorShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfig">DataOciDataflowInvokeRunExecutorShapeConfig</a>

---


### DataOciDataflowInvokeRunParametersList <a name="DataOciDataflowInvokeRunParametersList" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowinvokerun"

dataocidataflowinvokerun.NewDataOciDataflowInvokeRunParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataflowInvokeRunParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.get"></a>

```go
func Get(index *f64) DataOciDataflowInvokeRunParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataflowInvokeRunParametersOutputReference <a name="DataOciDataflowInvokeRunParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowinvokerun"

dataocidataflowinvokerun.NewDataOciDataflowInvokeRunParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataflowInvokeRunParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParameters">DataOciDataflowInvokeRunParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataflowInvokeRunParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParameters">DataOciDataflowInvokeRunParameters</a>

---



