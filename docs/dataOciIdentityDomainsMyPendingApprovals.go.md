# `dataOciIdentityDomainsMyPendingApprovals` Submodule <a name="`dataOciIdentityDomainsMyPendingApprovals` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyPendingApprovals <a name="DataOciIdentityDomainsMyPendingApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals oci_identity_domains_my_pending_approvals}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

dataociidentitydomainsmypendingapprovals.NewDataOciIdentityDomainsMyPendingApprovals(scope Construct, id *string, config DataOciIdentityDomainsMyPendingApprovalsConfig) DataOciIdentityDomainsMyPendingApprovals
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig">DataOciIdentityDomainsMyPendingApprovalsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig">DataOciIdentityDomainsMyPendingApprovalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetMyPendingApprovalCount">ResetMyPendingApprovalCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetMyPendingApprovalFilter">ResetMyPendingApprovalFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetId"></a>

```go
func ResetId()
```

##### `ResetMyPendingApprovalCount` <a name="ResetMyPendingApprovalCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetMyPendingApprovalCount"></a>

```go
func ResetMyPendingApprovalCount()
```

##### `ResetMyPendingApprovalFilter` <a name="ResetMyPendingApprovalFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetMyPendingApprovalFilter"></a>

```go
func ResetMyPendingApprovalFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetSortBy"></a>

```go
func ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetSortOrder"></a>

```go
func ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetStartIndex"></a>

```go
func ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyPendingApprovals resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

dataociidentitydomainsmypendingapprovals.DataOciIdentityDomainsMyPendingApprovals_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

dataociidentitydomainsmypendingapprovals.DataOciIdentityDomainsMyPendingApprovals_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

dataociidentitydomainsmypendingapprovals.DataOciIdentityDomainsMyPendingApprovals_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

dataociidentitydomainsmypendingapprovals.DataOciIdentityDomainsMyPendingApprovals_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyPendingApprovals resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsMyPendingApprovals to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsMyPendingApprovals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyPendingApprovals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovals">MyPendingApprovals</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovalCountInput">MyPendingApprovalCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovalFilterInput">MyPendingApprovalFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.sortByInput">SortByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.sortOrderInput">SortOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.startIndexInput">StartIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovalCount">MyPendingApprovalCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovalFilter">MyPendingApprovalFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.sortBy">SortBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `MyPendingApprovals`<sup>Required</sup> <a name="MyPendingApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovals"></a>

```go
func MyPendingApprovals() DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList</a>

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MyPendingApprovalCountInput`<sup>Optional</sup> <a name="MyPendingApprovalCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovalCountInput"></a>

```go
func MyPendingApprovalCountInput() *f64
```

- *Type:* *f64

---

##### `MyPendingApprovalFilterInput`<sup>Optional</sup> <a name="MyPendingApprovalFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovalFilterInput"></a>

```go
func MyPendingApprovalFilterInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.sortByInput"></a>

```go
func SortByInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.sortOrderInput"></a>

```go
func SortOrderInput() *string
```

- *Type:* *string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.startIndexInput"></a>

```go
func StartIndexInput() *f64
```

- *Type:* *f64

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `MyPendingApprovalCount`<sup>Required</sup> <a name="MyPendingApprovalCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovalCount"></a>

```go
func MyPendingApprovalCount() *f64
```

- *Type:* *f64

---

##### `MyPendingApprovalFilter`<sup>Required</sup> <a name="MyPendingApprovalFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovalFilter"></a>

```go
func MyPendingApprovalFilter() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.sortBy"></a>

```go
func SortBy() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyPendingApprovalsConfig <a name="DataOciIdentityDomainsMyPendingApprovalsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

&dataociidentitydomainsmypendingapprovals.DataOciIdentityDomainsMyPendingApprovalsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IdcsEndpoint: *string,
	Authorization: *string,
	CompartmentId: *string,
	Id: *string,
	MyPendingApprovalCount: *f64,
	MyPendingApprovalFilter: *string,
	ResourceTypeSchemaVersion: *string,
	SortBy: *string,
	SortOrder: *string,
	StartIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#idcs_endpoint DataOciIdentityDomainsMyPendingApprovals#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#authorization DataOciIdentityDomainsMyPendingApprovals#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#compartment_id DataOciIdentityDomainsMyPendingApprovals#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#id DataOciIdentityDomainsMyPendingApprovals#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.myPendingApprovalCount">MyPendingApprovalCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#my_pending_approval_count DataOciIdentityDomainsMyPendingApprovals#my_pending_approval_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.myPendingApprovalFilter">MyPendingApprovalFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#my_pending_approval_filter DataOciIdentityDomainsMyPendingApprovals#my_pending_approval_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#resource_type_schema_version DataOciIdentityDomainsMyPendingApprovals#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.sortBy">SortBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#sort_by DataOciIdentityDomainsMyPendingApprovals#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.sortOrder">SortOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#sort_order DataOciIdentityDomainsMyPendingApprovals#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.startIndex">StartIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#start_index DataOciIdentityDomainsMyPendingApprovals#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#idcs_endpoint DataOciIdentityDomainsMyPendingApprovals#idcs_endpoint}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#authorization DataOciIdentityDomainsMyPendingApprovals#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#compartment_id DataOciIdentityDomainsMyPendingApprovals#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#id DataOciIdentityDomainsMyPendingApprovals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MyPendingApprovalCount`<sup>Optional</sup> <a name="MyPendingApprovalCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.myPendingApprovalCount"></a>

```go
MyPendingApprovalCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#my_pending_approval_count DataOciIdentityDomainsMyPendingApprovals#my_pending_approval_count}.

---

##### `MyPendingApprovalFilter`<sup>Optional</sup> <a name="MyPendingApprovalFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.myPendingApprovalFilter"></a>

```go
MyPendingApprovalFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#my_pending_approval_filter DataOciIdentityDomainsMyPendingApprovals#my_pending_approval_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#resource_type_schema_version DataOciIdentityDomainsMyPendingApprovals#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.sortBy"></a>

```go
SortBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#sort_by DataOciIdentityDomainsMyPendingApprovals#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.sortOrder"></a>

```go
SortOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#sort_order DataOciIdentityDomainsMyPendingApprovals#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.startIndex"></a>

```go
StartIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#start_index DataOciIdentityDomainsMyPendingApprovals#start_index}.

---

### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

&dataociidentitydomainsmypendingapprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals {

}
```


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

&dataociidentitydomainsmypendingapprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy {

}
```


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

&dataociidentitydomainsmypendingapprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

&dataociidentitydomainsmypendingapprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta {

}
```


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

&dataociidentitydomainsmypendingapprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

dataociidentitydomainsmypendingapprovals.NewDataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

dataociidentitydomainsmypendingapprovals.NewDataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

dataociidentitydomainsmypendingapprovals.NewDataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

dataociidentitydomainsmypendingapprovals.NewDataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

dataociidentitydomainsmypendingapprovals.NewDataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

dataociidentitydomainsmypendingapprovals.NewDataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

dataociidentitydomainsmypendingapprovals.NewDataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta</a>

---


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

dataociidentitydomainsmypendingapprovals.NewDataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.expires">Expires</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.justification">Justification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.myPendingApprovalId">MyPendingApprovalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.requestCreatedTime">RequestCreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.requestDetails">RequestDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.requestId">RequestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.requestOcid">RequestOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.resourceDisplayName">ResourceDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.responseTime">ResponseTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `Expires`<sup>Required</sup> <a name="Expires" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.expires"></a>

```go
func Expires() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Justification`<sup>Required</sup> <a name="Justification" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.justification"></a>

```go
func Justification() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList</a>

---

##### `MyPendingApprovalId`<sup>Required</sup> <a name="MyPendingApprovalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.myPendingApprovalId"></a>

```go
func MyPendingApprovalId() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `RequestCreatedTime`<sup>Required</sup> <a name="RequestCreatedTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.requestCreatedTime"></a>

```go
func RequestCreatedTime() *string
```

- *Type:* *string

---

##### `RequestDetails`<sup>Required</sup> <a name="RequestDetails" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.requestDetails"></a>

```go
func RequestDetails() *string
```

- *Type:* *string

---

##### `RequestId`<sup>Required</sup> <a name="RequestId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.requestId"></a>

```go
func RequestId() *string
```

- *Type:* *string

---

##### `RequestOcid`<sup>Required</sup> <a name="RequestOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.requestOcid"></a>

```go
func RequestOcid() *string
```

- *Type:* *string

---

##### `ResourceDisplayName`<sup>Required</sup> <a name="ResourceDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.resourceDisplayName"></a>

```go
func ResourceDisplayName() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `ResponseTime`<sup>Required</sup> <a name="ResponseTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.responseTime"></a>

```go
func ResponseTime() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals</a>

---


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

dataociidentitydomainsmypendingapprovals.NewDataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmypendingapprovals"

dataociidentitydomainsmypendingapprovals.NewDataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags</a>

---



