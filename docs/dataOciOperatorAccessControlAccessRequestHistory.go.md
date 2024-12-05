# `dataOciOperatorAccessControlAccessRequestHistory` Submodule <a name="`dataOciOperatorAccessControlAccessRequestHistory` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlAccessRequestHistory <a name="DataOciOperatorAccessControlAccessRequestHistory" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_history oci_operator_access_control_access_request_history}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequesthistory"

dataocioperatoraccesscontrolaccessrequesthistory.NewDataOciOperatorAccessControlAccessRequestHistory(scope Construct, id *string, config DataOciOperatorAccessControlAccessRequestHistoryConfig) DataOciOperatorAccessControlAccessRequestHistory
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig">DataOciOperatorAccessControlAccessRequestHistoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig">DataOciOperatorAccessControlAccessRequestHistoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequestHistory resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequesthistory"

dataocioperatoraccesscontrolaccessrequesthistory.DataOciOperatorAccessControlAccessRequestHistory_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequesthistory"

dataocioperatoraccesscontrolaccessrequesthistory.DataOciOperatorAccessControlAccessRequestHistory_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequesthistory"

dataocioperatoraccesscontrolaccessrequesthistory.DataOciOperatorAccessControlAccessRequestHistory_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequesthistory"

dataocioperatoraccesscontrolaccessrequesthistory.DataOciOperatorAccessControlAccessRequestHistory_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequestHistory resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOperatorAccessControlAccessRequestHistory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOperatorAccessControlAccessRequestHistory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_history#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlAccessRequestHistory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList">DataOciOperatorAccessControlAccessRequestHistoryItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.accessRequestIdInput">AccessRequestIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.accessRequestId">AccessRequestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.items"></a>

```go
func Items() DataOciOperatorAccessControlAccessRequestHistoryItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList">DataOciOperatorAccessControlAccessRequestHistoryItemsList</a>

---

##### `AccessRequestIdInput`<sup>Optional</sup> <a name="AccessRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.accessRequestIdInput"></a>

```go
func AccessRequestIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AccessRequestId`<sup>Required</sup> <a name="AccessRequestId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.accessRequestId"></a>

```go
func AccessRequestId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlAccessRequestHistoryConfig <a name="DataOciOperatorAccessControlAccessRequestHistoryConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequesthistory"

&dataocioperatoraccesscontrolaccessrequesthistory.DataOciOperatorAccessControlAccessRequestHistoryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccessRequestId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.accessRequestId">AccessRequestId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_history#access_request_id DataOciOperatorAccessControlAccessRequestHistory#access_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_history#id DataOciOperatorAccessControlAccessRequestHistory#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessRequestId`<sup>Required</sup> <a name="AccessRequestId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.accessRequestId"></a>

```go
AccessRequestId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_history#access_request_id DataOciOperatorAccessControlAccessRequestHistory#access_request_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_history#id DataOciOperatorAccessControlAccessRequestHistory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOperatorAccessControlAccessRequestHistoryItems <a name="DataOciOperatorAccessControlAccessRequestHistoryItems" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequesthistory"

&dataocioperatoraccesscontrolaccessrequesthistory.DataOciOperatorAccessControlAccessRequestHistoryItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOperatorAccessControlAccessRequestHistoryItemsList <a name="DataOciOperatorAccessControlAccessRequestHistoryItemsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequesthistory"

dataocioperatoraccesscontrolaccessrequesthistory.NewDataOciOperatorAccessControlAccessRequestHistoryItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOperatorAccessControlAccessRequestHistoryItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.get"></a>

```go
func Get(index *f64) DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference <a name="DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequesthistory"

dataocioperatoraccesscontrolaccessrequesthistory.NewDataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.actionsList">ActionsList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.isAutoApproved">IsAutoApproved</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.timeOfAction">TimeOfAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItems">DataOciOperatorAccessControlAccessRequestHistoryItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsList`<sup>Required</sup> <a name="ActionsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.actionsList"></a>

```go
func ActionsList() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `IsAutoApproved`<sup>Required</sup> <a name="IsAutoApproved" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.isAutoApproved"></a>

```go
func IsAutoApproved() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeOfAction`<sup>Required</sup> <a name="TimeOfAction" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.timeOfAction"></a>

```go
func TimeOfAction() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOperatorAccessControlAccessRequestHistoryItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItems">DataOciOperatorAccessControlAccessRequestHistoryItems</a>

---



