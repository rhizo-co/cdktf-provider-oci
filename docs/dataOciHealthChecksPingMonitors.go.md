# `dataOciHealthChecksPingMonitors` Submodule <a name="`dataOciHealthChecksPingMonitors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciHealthChecksPingMonitors <a name="DataOciHealthChecksPingMonitors" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors oci_health_checks_ping_monitors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingmonitors"

dataocihealthcheckspingmonitors.NewDataOciHealthChecksPingMonitors(scope Construct, id *string, config DataOciHealthChecksPingMonitorsConfig) DataOciHealthChecksPingMonitors
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig">DataOciHealthChecksPingMonitorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig">DataOciHealthChecksPingMonitorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetHomeRegion">ResetHomeRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetHomeRegion` <a name="ResetHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetHomeRegion"></a>

```go
func ResetHomeRegion()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciHealthChecksPingMonitors resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingmonitors"

dataocihealthcheckspingmonitors.DataOciHealthChecksPingMonitors_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingmonitors"

dataocihealthcheckspingmonitors.DataOciHealthChecksPingMonitors_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingmonitors"

dataocihealthcheckspingmonitors.DataOciHealthChecksPingMonitors_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingmonitors"

dataocihealthcheckspingmonitors.DataOciHealthChecksPingMonitors_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciHealthChecksPingMonitors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciHealthChecksPingMonitors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciHealthChecksPingMonitors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciHealthChecksPingMonitors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList">DataOciHealthChecksPingMonitorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.pingMonitors">PingMonitors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList">DataOciHealthChecksPingMonitorsPingMonitorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.homeRegionInput">HomeRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.homeRegion">HomeRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.filter"></a>

```go
func Filter() DataOciHealthChecksPingMonitorsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList">DataOciHealthChecksPingMonitorsFilterList</a>

---

##### `PingMonitors`<sup>Required</sup> <a name="PingMonitors" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.pingMonitors"></a>

```go
func PingMonitors() DataOciHealthChecksPingMonitorsPingMonitorsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList">DataOciHealthChecksPingMonitorsPingMonitorsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `HomeRegionInput`<sup>Optional</sup> <a name="HomeRegionInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.homeRegionInput"></a>

```go
func HomeRegionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `HomeRegion`<sup>Required</sup> <a name="HomeRegion" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.homeRegion"></a>

```go
func HomeRegion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciHealthChecksPingMonitorsConfig <a name="DataOciHealthChecksPingMonitorsConfig" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingmonitors"

&dataocihealthcheckspingmonitors.DataOciHealthChecksPingMonitorsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	HomeRegion: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#compartment_id DataOciHealthChecksPingMonitors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#display_name DataOciHealthChecksPingMonitors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.homeRegion">HomeRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#home_region DataOciHealthChecksPingMonitors#home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#id DataOciHealthChecksPingMonitors#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#compartment_id DataOciHealthChecksPingMonitors#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#display_name DataOciHealthChecksPingMonitors#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#filter DataOciHealthChecksPingMonitors#filter}

---

##### `HomeRegion`<sup>Optional</sup> <a name="HomeRegion" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.homeRegion"></a>

```go
HomeRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#home_region DataOciHealthChecksPingMonitors#home_region}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#id DataOciHealthChecksPingMonitors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciHealthChecksPingMonitorsFilter <a name="DataOciHealthChecksPingMonitorsFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingmonitors"

&dataocihealthcheckspingmonitors.DataOciHealthChecksPingMonitorsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#name DataOciHealthChecksPingMonitors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#values DataOciHealthChecksPingMonitors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#regex DataOciHealthChecksPingMonitors#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#name DataOciHealthChecksPingMonitors#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#values DataOciHealthChecksPingMonitors#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#regex DataOciHealthChecksPingMonitors#regex}.

---

### DataOciHealthChecksPingMonitorsPingMonitors <a name="DataOciHealthChecksPingMonitorsPingMonitors" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitors.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingmonitors"

&dataocihealthcheckspingmonitors.DataOciHealthChecksPingMonitorsPingMonitors {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciHealthChecksPingMonitorsFilterList <a name="DataOciHealthChecksPingMonitorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingmonitors"

dataocihealthcheckspingmonitors.NewDataOciHealthChecksPingMonitorsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciHealthChecksPingMonitorsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.get"></a>

```go
func Get(index *f64) DataOciHealthChecksPingMonitorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciHealthChecksPingMonitorsFilterOutputReference <a name="DataOciHealthChecksPingMonitorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingmonitors"

dataocihealthcheckspingmonitors.NewDataOciHealthChecksPingMonitorsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciHealthChecksPingMonitorsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciHealthChecksPingMonitorsPingMonitorsList <a name="DataOciHealthChecksPingMonitorsPingMonitorsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingmonitors"

dataocihealthcheckspingmonitors.NewDataOciHealthChecksPingMonitorsPingMonitorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciHealthChecksPingMonitorsPingMonitorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.get"></a>

```go
func Get(index *f64) DataOciHealthChecksPingMonitorsPingMonitorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciHealthChecksPingMonitorsPingMonitorsOutputReference <a name="DataOciHealthChecksPingMonitorsPingMonitorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocihealthcheckspingmonitors"

dataocihealthcheckspingmonitors.NewDataOciHealthChecksPingMonitorsPingMonitorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciHealthChecksPingMonitorsPingMonitorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.homeRegion">HomeRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.resultsUrl">ResultsUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.targets">Targets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.vantagePointNames">VantagePointNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitors">DataOciHealthChecksPingMonitorsPingMonitors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HomeRegion`<sup>Required</sup> <a name="HomeRegion" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.homeRegion"></a>

```go
func HomeRegion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.intervalInSeconds"></a>

```go
func IntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ResultsUrl`<sup>Required</sup> <a name="ResultsUrl" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.resultsUrl"></a>

```go
func ResultsUrl() *string
```

- *Type:* *string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.targets"></a>

```go
func Targets() *[]*string
```

- *Type:* *[]*string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `VantagePointNames`<sup>Required</sup> <a name="VantagePointNames" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.vantagePointNames"></a>

```go
func VantagePointNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciHealthChecksPingMonitorsPingMonitors
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitors">DataOciHealthChecksPingMonitorsPingMonitors</a>

---



