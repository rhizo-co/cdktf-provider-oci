# `dataOciIdentityDomainsMyCompletedApprovals` Submodule <a name="`dataOciIdentityDomainsMyCompletedApprovals` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyCompletedApprovals <a name="DataOciIdentityDomainsMyCompletedApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals oci_identity_domains_my_completed_approvals}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

dataociidentitydomainsmycompletedapprovals.NewDataOciIdentityDomainsMyCompletedApprovals(scope Construct, id *string, config DataOciIdentityDomainsMyCompletedApprovalsConfig) DataOciIdentityDomainsMyCompletedApprovals
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig">DataOciIdentityDomainsMyCompletedApprovalsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig">DataOciIdentityDomainsMyCompletedApprovalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetMyCompletedApprovalCount">ResetMyCompletedApprovalCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetMyCompletedApprovalFilter">ResetMyCompletedApprovalFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetId"></a>

```go
func ResetId()
```

##### `ResetMyCompletedApprovalCount` <a name="ResetMyCompletedApprovalCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetMyCompletedApprovalCount"></a>

```go
func ResetMyCompletedApprovalCount()
```

##### `ResetMyCompletedApprovalFilter` <a name="ResetMyCompletedApprovalFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetMyCompletedApprovalFilter"></a>

```go
func ResetMyCompletedApprovalFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetSortBy"></a>

```go
func ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetSortOrder"></a>

```go
func ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetStartIndex"></a>

```go
func ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyCompletedApprovals resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

dataociidentitydomainsmycompletedapprovals.DataOciIdentityDomainsMyCompletedApprovals_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

dataociidentitydomainsmycompletedapprovals.DataOciIdentityDomainsMyCompletedApprovals_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

dataociidentitydomainsmycompletedapprovals.DataOciIdentityDomainsMyCompletedApprovals_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

dataociidentitydomainsmycompletedapprovals.DataOciIdentityDomainsMyCompletedApprovals_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyCompletedApprovals resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsMyCompletedApprovals to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsMyCompletedApprovals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyCompletedApprovals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovals">MyCompletedApprovals</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalCountInput">MyCompletedApprovalCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalFilterInput">MyCompletedApprovalFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortByInput">SortByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortOrderInput">SortOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.startIndexInput">StartIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalCount">MyCompletedApprovalCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalFilter">MyCompletedApprovalFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortBy">SortBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `MyCompletedApprovals`<sup>Required</sup> <a name="MyCompletedApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovals"></a>

```go
func MyCompletedApprovals() DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList</a>

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MyCompletedApprovalCountInput`<sup>Optional</sup> <a name="MyCompletedApprovalCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalCountInput"></a>

```go
func MyCompletedApprovalCountInput() *f64
```

- *Type:* *f64

---

##### `MyCompletedApprovalFilterInput`<sup>Optional</sup> <a name="MyCompletedApprovalFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalFilterInput"></a>

```go
func MyCompletedApprovalFilterInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortByInput"></a>

```go
func SortByInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortOrderInput"></a>

```go
func SortOrderInput() *string
```

- *Type:* *string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.startIndexInput"></a>

```go
func StartIndexInput() *f64
```

- *Type:* *f64

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `MyCompletedApprovalCount`<sup>Required</sup> <a name="MyCompletedApprovalCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalCount"></a>

```go
func MyCompletedApprovalCount() *f64
```

- *Type:* *f64

---

##### `MyCompletedApprovalFilter`<sup>Required</sup> <a name="MyCompletedApprovalFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalFilter"></a>

```go
func MyCompletedApprovalFilter() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortBy"></a>

```go
func SortBy() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyCompletedApprovalsConfig <a name="DataOciIdentityDomainsMyCompletedApprovalsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

&dataociidentitydomainsmycompletedapprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig {
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
	MyCompletedApprovalCount: *f64,
	MyCompletedApprovalFilter: *string,
	ResourceTypeSchemaVersion: *string,
	SortBy: *string,
	SortOrder: *string,
	StartIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#idcs_endpoint DataOciIdentityDomainsMyCompletedApprovals#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#authorization DataOciIdentityDomainsMyCompletedApprovals#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#compartment_id DataOciIdentityDomainsMyCompletedApprovals#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#id DataOciIdentityDomainsMyCompletedApprovals#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.myCompletedApprovalCount">MyCompletedApprovalCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_count DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.myCompletedApprovalFilter">MyCompletedApprovalFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_filter DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#resource_type_schema_version DataOciIdentityDomainsMyCompletedApprovals#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.sortBy">SortBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_by DataOciIdentityDomainsMyCompletedApprovals#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.sortOrder">SortOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_order DataOciIdentityDomainsMyCompletedApprovals#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.startIndex">StartIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#start_index DataOciIdentityDomainsMyCompletedApprovals#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#idcs_endpoint DataOciIdentityDomainsMyCompletedApprovals#idcs_endpoint}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#authorization DataOciIdentityDomainsMyCompletedApprovals#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#compartment_id DataOciIdentityDomainsMyCompletedApprovals#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#id DataOciIdentityDomainsMyCompletedApprovals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MyCompletedApprovalCount`<sup>Optional</sup> <a name="MyCompletedApprovalCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.myCompletedApprovalCount"></a>

```go
MyCompletedApprovalCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_count DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_count}.

---

##### `MyCompletedApprovalFilter`<sup>Optional</sup> <a name="MyCompletedApprovalFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.myCompletedApprovalFilter"></a>

```go
MyCompletedApprovalFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_filter DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#resource_type_schema_version DataOciIdentityDomainsMyCompletedApprovals#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.sortBy"></a>

```go
SortBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_by DataOciIdentityDomainsMyCompletedApprovals#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.sortOrder"></a>

```go
SortOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_order DataOciIdentityDomainsMyCompletedApprovals#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.startIndex"></a>

```go
StartIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#start_index DataOciIdentityDomainsMyCompletedApprovals#start_index}.

---

### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

&dataociidentitydomainsmycompletedapprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals {

}
```


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

&dataociidentitydomainsmycompletedapprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy {

}
```


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

&dataociidentitydomainsmycompletedapprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

&dataociidentitydomainsmycompletedapprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta {

}
```


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

&dataociidentitydomainsmycompletedapprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

dataociidentitydomainsmycompletedapprovals.NewDataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

dataociidentitydomainsmycompletedapprovals.NewDataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

dataociidentitydomainsmycompletedapprovals.NewDataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

dataociidentitydomainsmycompletedapprovals.NewDataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

dataociidentitydomainsmycompletedapprovals.NewDataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

dataociidentitydomainsmycompletedapprovals.NewDataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

dataociidentitydomainsmycompletedapprovals.NewDataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta</a>

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

dataociidentitydomainsmycompletedapprovals.NewDataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.expires">Expires</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.justification">Justification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.myCompletedApprovalId">MyCompletedApprovalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestCreatedTime">RequestCreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestDetails">RequestDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestId">RequestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestOcid">RequestOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceDisplayName">ResourceDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.responseTime">ResponseTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `Expires`<sup>Required</sup> <a name="Expires" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.expires"></a>

```go
func Expires() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Justification`<sup>Required</sup> <a name="Justification" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.justification"></a>

```go
func Justification() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList</a>

---

##### `MyCompletedApprovalId`<sup>Required</sup> <a name="MyCompletedApprovalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.myCompletedApprovalId"></a>

```go
func MyCompletedApprovalId() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `RequestCreatedTime`<sup>Required</sup> <a name="RequestCreatedTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestCreatedTime"></a>

```go
func RequestCreatedTime() *string
```

- *Type:* *string

---

##### `RequestDetails`<sup>Required</sup> <a name="RequestDetails" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestDetails"></a>

```go
func RequestDetails() *string
```

- *Type:* *string

---

##### `RequestId`<sup>Required</sup> <a name="RequestId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestId"></a>

```go
func RequestId() *string
```

- *Type:* *string

---

##### `RequestOcid`<sup>Required</sup> <a name="RequestOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestOcid"></a>

```go
func RequestOcid() *string
```

- *Type:* *string

---

##### `ResourceDisplayName`<sup>Required</sup> <a name="ResourceDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceDisplayName"></a>

```go
func ResourceDisplayName() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `ResponseTime`<sup>Required</sup> <a name="ResponseTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.responseTime"></a>

```go
func ResponseTime() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals</a>

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

dataociidentitydomainsmycompletedapprovals.NewDataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmycompletedapprovals"

dataociidentitydomainsmycompletedapprovals.NewDataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags</a>

---



