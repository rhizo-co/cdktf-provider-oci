# `dataOciDelegateAccessControlDelegatedResourceAccessRequests` Submodule <a name="`dataOciDelegateAccessControlDelegatedResourceAccessRequests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequests <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequests" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests oci_delegate_access_control_delegated_resource_access_requests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequests"

dataocidelegateaccesscontroldelegatedresourceaccessrequests.NewDataOciDelegateAccessControlDelegatedResourceAccessRequests(scope Construct, id *string, config DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig) DataOciDelegateAccessControlDelegatedResourceAccessRequests
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig">DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig">DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetDelegationControlId">ResetDelegationControlId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetRequestStatus">ResetRequestStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetTimeEnd">ResetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetTimeStart">ResetTimeStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDelegationControlId` <a name="ResetDelegationControlId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetDelegationControlId"></a>

```go
func ResetDelegationControlId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetId"></a>

```go
func ResetId()
```

##### `ResetRequestStatus` <a name="ResetRequestStatus" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetRequestStatus"></a>

```go
func ResetRequestStatus()
```

##### `ResetResourceId` <a name="ResetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetResourceId"></a>

```go
func ResetResourceId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeEnd` <a name="ResetTimeEnd" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetTimeEnd"></a>

```go
func ResetTimeEnd()
```

##### `ResetTimeStart` <a name="ResetTimeStart" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetTimeStart"></a>

```go
func ResetTimeStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequests resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequests"

dataocidelegateaccesscontroldelegatedresourceaccessrequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequests"

dataocidelegateaccesscontroldelegatedresourceaccessrequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequests"

dataocidelegateaccesscontroldelegatedresourceaccessrequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequests"

dataocidelegateaccesscontroldelegatedresourceaccessrequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDelegateAccessControlDelegatedResourceAccessRequests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDelegateAccessControlDelegatedResourceAccessRequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlDelegatedResourceAccessRequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.delegatedResourceAccessRequestSummaryCollection">DelegatedResourceAccessRequestSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList">DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.delegationControlIdInput">DelegationControlIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.requestStatusInput">RequestStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.timeEndInput">TimeEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.timeStartInput">TimeStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.delegationControlId">DelegationControlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.requestStatus">RequestStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DelegatedResourceAccessRequestSummaryCollection`<sup>Required</sup> <a name="DelegatedResourceAccessRequestSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.delegatedResourceAccessRequestSummaryCollection"></a>

```go
func DelegatedResourceAccessRequestSummaryCollection() DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.filter"></a>

```go
func Filter() DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList">DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DelegationControlIdInput`<sup>Optional</sup> <a name="DelegationControlIdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.delegationControlIdInput"></a>

```go
func DelegationControlIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RequestStatusInput`<sup>Optional</sup> <a name="RequestStatusInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.requestStatusInput"></a>

```go
func RequestStatusInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeEndInput`<sup>Optional</sup> <a name="TimeEndInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.timeEndInput"></a>

```go
func TimeEndInput() *string
```

- *Type:* *string

---

##### `TimeStartInput`<sup>Optional</sup> <a name="TimeStartInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.timeStartInput"></a>

```go
func TimeStartInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DelegationControlId`<sup>Required</sup> <a name="DelegationControlId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.delegationControlId"></a>

```go
func DelegationControlId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RequestStatus`<sup>Required</sup> <a name="RequestStatus" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.requestStatus"></a>

```go
func RequestStatus() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequests"

&dataocidelegateaccesscontroldelegatedresourceaccessrequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DelegationControlId: *string,
	Filter: interface{},
	Id: *string,
	RequestStatus: *string,
	ResourceId: *string,
	State: *string,
	TimeEnd: *string,
	TimeStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#compartment_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.delegationControlId">DelegationControlId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#delegation_control_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#delegation_control_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#id DataOciDelegateAccessControlDelegatedResourceAccessRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.requestStatus">RequestStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#request_status DataOciDelegateAccessControlDelegatedResourceAccessRequests#request_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#resource_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#state DataOciDelegateAccessControlDelegatedResourceAccessRequests#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#time_end DataOciDelegateAccessControlDelegatedResourceAccessRequests#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.timeStart">TimeStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#time_start DataOciDelegateAccessControlDelegatedResourceAccessRequests#time_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#compartment_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#compartment_id}.

---

##### `DelegationControlId`<sup>Optional</sup> <a name="DelegationControlId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.delegationControlId"></a>

```go
DelegationControlId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#delegation_control_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#delegation_control_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#filter DataOciDelegateAccessControlDelegatedResourceAccessRequests#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#id DataOciDelegateAccessControlDelegatedResourceAccessRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RequestStatus`<sup>Optional</sup> <a name="RequestStatus" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.requestStatus"></a>

```go
RequestStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#request_status DataOciDelegateAccessControlDelegatedResourceAccessRequests#request_status}.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#resource_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#resource_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#state DataOciDelegateAccessControlDelegatedResourceAccessRequests#state}.

---

##### `TimeEnd`<sup>Optional</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.timeEnd"></a>

```go
TimeEnd *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#time_end DataOciDelegateAccessControlDelegatedResourceAccessRequests#time_end}.

---

##### `TimeStart`<sup>Optional</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.timeStart"></a>

```go
TimeStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#time_start DataOciDelegateAccessControlDelegatedResourceAccessRequests#time_start}.

---

### DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequests"

&dataocidelegateaccesscontroldelegatedresourceaccessrequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection {

}
```


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequests"

&dataocidelegateaccesscontroldelegatedresourceaccessrequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems {

}
```


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequests"

&dataocidelegateaccesscontroldelegatedresourceaccessrequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo {

}
```


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequests"

&dataocidelegateaccesscontroldelegatedresourceaccessrequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#name DataOciDelegateAccessControlDelegatedResourceAccessRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#values DataOciDelegateAccessControlDelegatedResourceAccessRequests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#regex DataOciDelegateAccessControlDelegatedResourceAccessRequests#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#name DataOciDelegateAccessControlDelegatedResourceAccessRequests#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#values DataOciDelegateAccessControlDelegatedResourceAccessRequests#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#regex DataOciDelegateAccessControlDelegatedResourceAccessRequests#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequests"

dataocidelegateaccesscontroldelegatedresourceaccessrequests.NewDataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.get"></a>

```go
func Get(index *f64) DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequests"

dataocidelegateaccesscontroldelegatedresourceaccessrequests.NewDataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approvalAction">ApprovalAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approvalType">ApprovalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approverAdditionalMessage">ApproverAdditionalMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approverComment">ApproverComment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approverId">ApproverId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.timeApprovedForAccess">TimeApprovedForAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApprovalAction`<sup>Required</sup> <a name="ApprovalAction" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approvalAction"></a>

```go
func ApprovalAction() *string
```

- *Type:* *string

---

##### `ApprovalType`<sup>Required</sup> <a name="ApprovalType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approvalType"></a>

```go
func ApprovalType() *string
```

- *Type:* *string

---

##### `ApproverAdditionalMessage`<sup>Required</sup> <a name="ApproverAdditionalMessage" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approverAdditionalMessage"></a>

```go
func ApproverAdditionalMessage() *string
```

- *Type:* *string

---

##### `ApproverComment`<sup>Required</sup> <a name="ApproverComment" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approverComment"></a>

```go
func ApproverComment() *string
```

- *Type:* *string

---

##### `ApproverId`<sup>Required</sup> <a name="ApproverId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approverId"></a>

```go
func ApproverId() *string
```

- *Type:* *string

---

##### `TimeApprovedForAccess`<sup>Required</sup> <a name="TimeApprovedForAccess" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.timeApprovedForAccess"></a>

```go
func TimeApprovedForAccess() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo</a>

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequests"

dataocidelegateaccesscontroldelegatedresourceaccessrequests.NewDataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequests"

dataocidelegateaccesscontroldelegatedresourceaccessrequests.NewDataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.approvalInfo">ApprovalInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.auditTypes">AuditTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.closureComment">ClosureComment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.databaseNameList">DatabaseNameList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.delegationControlId">DelegationControlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.delegationSubscriptionIds">DelegationSubscriptionIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.durationInHours">DurationInHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.extendDurationInHours">ExtendDurationInHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.isAutoApproved">IsAutoApproved</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.isPendingMoreInfo">IsPendingMoreInfo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.lifecycleStateDetails">LifecycleStateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.numExtensionApprovals">NumExtensionApprovals</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.numInitialApprovals">NumInitialApprovals</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.providedServiceTypes">ProvidedServiceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.reasonForRequest">ReasonForRequest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.requestedActionNames">RequestedActionNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.requesterType">RequesterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.requestStatus">RequestStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.ticketNumbers">TicketNumbers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.timeAccessRequested">TimeAccessRequested</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApprovalInfo`<sup>Required</sup> <a name="ApprovalInfo" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.approvalInfo"></a>

```go
func ApprovalInfo() DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList</a>

---

##### `AuditTypes`<sup>Required</sup> <a name="AuditTypes" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.auditTypes"></a>

```go
func AuditTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ClosureComment`<sup>Required</sup> <a name="ClosureComment" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.closureComment"></a>

```go
func ClosureComment() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DatabaseNameList`<sup>Required</sup> <a name="DatabaseNameList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.databaseNameList"></a>

```go
func DatabaseNameList() *[]*string
```

- *Type:* *[]*string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DelegationControlId`<sup>Required</sup> <a name="DelegationControlId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.delegationControlId"></a>

```go
func DelegationControlId() *string
```

- *Type:* *string

---

##### `DelegationSubscriptionIds`<sup>Required</sup> <a name="DelegationSubscriptionIds" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.delegationSubscriptionIds"></a>

```go
func DelegationSubscriptionIds() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DurationInHours`<sup>Required</sup> <a name="DurationInHours" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.durationInHours"></a>

```go
func DurationInHours() *f64
```

- *Type:* *f64

---

##### `ExtendDurationInHours`<sup>Required</sup> <a name="ExtendDurationInHours" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.extendDurationInHours"></a>

```go
func ExtendDurationInHours() *f64
```

- *Type:* *f64

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAutoApproved`<sup>Required</sup> <a name="IsAutoApproved" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.isAutoApproved"></a>

```go
func IsAutoApproved() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPendingMoreInfo`<sup>Required</sup> <a name="IsPendingMoreInfo" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.isPendingMoreInfo"></a>

```go
func IsPendingMoreInfo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleStateDetails`<sup>Required</sup> <a name="LifecycleStateDetails" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.lifecycleStateDetails"></a>

```go
func LifecycleStateDetails() *string
```

- *Type:* *string

---

##### `NumExtensionApprovals`<sup>Required</sup> <a name="NumExtensionApprovals" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.numExtensionApprovals"></a>

```go
func NumExtensionApprovals() *f64
```

- *Type:* *f64

---

##### `NumInitialApprovals`<sup>Required</sup> <a name="NumInitialApprovals" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.numInitialApprovals"></a>

```go
func NumInitialApprovals() *f64
```

- *Type:* *f64

---

##### `ProvidedServiceTypes`<sup>Required</sup> <a name="ProvidedServiceTypes" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.providedServiceTypes"></a>

```go
func ProvidedServiceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ReasonForRequest`<sup>Required</sup> <a name="ReasonForRequest" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.reasonForRequest"></a>

```go
func ReasonForRequest() *string
```

- *Type:* *string

---

##### `RequestedActionNames`<sup>Required</sup> <a name="RequestedActionNames" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.requestedActionNames"></a>

```go
func RequestedActionNames() *[]*string
```

- *Type:* *[]*string

---

##### `RequesterType`<sup>Required</sup> <a name="RequesterType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.requesterType"></a>

```go
func RequesterType() *string
```

- *Type:* *string

---

##### `RequestStatus`<sup>Required</sup> <a name="RequestStatus" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.requestStatus"></a>

```go
func RequestStatus() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TicketNumbers`<sup>Required</sup> <a name="TicketNumbers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.ticketNumbers"></a>

```go
func TicketNumbers() *[]*string
```

- *Type:* *[]*string

---

##### `TimeAccessRequested`<sup>Required</sup> <a name="TimeAccessRequested" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.timeAccessRequested"></a>

```go
func TimeAccessRequested() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems</a>

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequests"

dataocidelegateaccesscontroldelegatedresourceaccessrequests.NewDataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequests"

dataocidelegateaccesscontroldelegatedresourceaccessrequests.NewDataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection</a>

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequests"

dataocidelegateaccesscontroldelegatedresourceaccessrequests.NewDataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.get"></a>

```go
func Get(index *f64) DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequests"

dataocidelegateaccesscontroldelegatedresourceaccessrequests.NewDataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



