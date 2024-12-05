# `dataOciOptimizerResourceActions` Submodule <a name="`dataOciOptimizerResourceActions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOptimizerResourceActions <a name="DataOciOptimizerResourceActions" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions oci_optimizer_resource_actions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_resource_actions.DataOciOptimizerResourceActions;

DataOciOptimizerResourceActions.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .compartmentIdInSubtree(java.lang.Boolean)
    .compartmentIdInSubtree(IResolvable)
//  .childTenancyIds(java.util.List<java.lang.String>)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOptimizerResourceActionsFilter>)
//  .id(java.lang.String)
//  .includeOrganization(java.lang.Boolean)
//  .includeOrganization(IResolvable)
//  .includeResourceMetadata(java.lang.Boolean)
//  .includeResourceMetadata(IResolvable)
//  .name(java.lang.String)
//  .recommendationId(java.lang.String)
//  .recommendationName(java.lang.String)
//  .resourceType(java.lang.String)
//  .state(java.lang.String)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#compartment_id DataOciOptimizerResourceActions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#compartment_id_in_subtree DataOciOptimizerResourceActions#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.childTenancyIds">childTenancyIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#child_tenancy_ids DataOciOptimizerResourceActions#child_tenancy_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter">DataOciOptimizerResourceActionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#id DataOciOptimizerResourceActions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.includeOrganization">includeOrganization</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#include_organization DataOciOptimizerResourceActions#include_organization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.includeResourceMetadata">includeResourceMetadata</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#include_resource_metadata DataOciOptimizerResourceActions#include_resource_metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#name DataOciOptimizerResourceActions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.recommendationId">recommendationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#recommendation_id DataOciOptimizerResourceActions#recommendation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.recommendationName">recommendationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#recommendation_name DataOciOptimizerResourceActions#recommendation_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#resource_type DataOciOptimizerResourceActions#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#state DataOciOptimizerResourceActions#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#status DataOciOptimizerResourceActions#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#compartment_id DataOciOptimizerResourceActions#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#compartment_id_in_subtree DataOciOptimizerResourceActions#compartment_id_in_subtree}.

---

##### `childTenancyIds`<sup>Optional</sup> <a name="childTenancyIds" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.childTenancyIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#child_tenancy_ids DataOciOptimizerResourceActions#child_tenancy_ids}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter">DataOciOptimizerResourceActionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#filter DataOciOptimizerResourceActions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#id DataOciOptimizerResourceActions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeOrganization`<sup>Optional</sup> <a name="includeOrganization" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.includeOrganization"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#include_organization DataOciOptimizerResourceActions#include_organization}.

---

##### `includeResourceMetadata`<sup>Optional</sup> <a name="includeResourceMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.includeResourceMetadata"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#include_resource_metadata DataOciOptimizerResourceActions#include_resource_metadata}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#name DataOciOptimizerResourceActions#name}.

---

##### `recommendationId`<sup>Optional</sup> <a name="recommendationId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.recommendationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#recommendation_id DataOciOptimizerResourceActions#recommendation_id}.

---

##### `recommendationName`<sup>Optional</sup> <a name="recommendationName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.recommendationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#recommendation_name DataOciOptimizerResourceActions#recommendation_name}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.resourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#resource_type DataOciOptimizerResourceActions#resource_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#state DataOciOptimizerResourceActions#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#status DataOciOptimizerResourceActions#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetChildTenancyIds">resetChildTenancyIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetIncludeOrganization">resetIncludeOrganization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetIncludeResourceMetadata">resetIncludeResourceMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetRecommendationId">resetRecommendationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetRecommendationName">resetRecommendationName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOptimizerResourceActionsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter">DataOciOptimizerResourceActionsFilter</a>>

---

##### `resetChildTenancyIds` <a name="resetChildTenancyIds" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetChildTenancyIds"></a>

```java
public void resetChildTenancyIds()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeOrganization` <a name="resetIncludeOrganization" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetIncludeOrganization"></a>

```java
public void resetIncludeOrganization()
```

##### `resetIncludeResourceMetadata` <a name="resetIncludeResourceMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetIncludeResourceMetadata"></a>

```java
public void resetIncludeResourceMetadata()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetName"></a>

```java
public void resetName()
```

##### `resetRecommendationId` <a name="resetRecommendationId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetRecommendationId"></a>

```java
public void resetRecommendationId()
```

##### `resetRecommendationName` <a name="resetRecommendationName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetRecommendationName"></a>

```java
public void resetRecommendationName()
```

##### `resetResourceType` <a name="resetResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetResourceType"></a>

```java
public void resetResourceType()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetState"></a>

```java
public void resetState()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOptimizerResourceActions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_resource_actions.DataOciOptimizerResourceActions;

DataOciOptimizerResourceActions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_resource_actions.DataOciOptimizerResourceActions;

DataOciOptimizerResourceActions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_resource_actions.DataOciOptimizerResourceActions;

DataOciOptimizerResourceActions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_resource_actions.DataOciOptimizerResourceActions;

DataOciOptimizerResourceActions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOptimizerResourceActions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOptimizerResourceActions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOptimizerResourceActions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOptimizerResourceActions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOptimizerResourceActions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList">DataOciOptimizerResourceActionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.resourceActionCollection">resourceActionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList">DataOciOptimizerResourceActionsResourceActionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.childTenancyIdsInput">childTenancyIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter">DataOciOptimizerResourceActionsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.includeOrganizationInput">includeOrganizationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.includeResourceMetadataInput">includeResourceMetadataInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.recommendationIdInput">recommendationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.recommendationNameInput">recommendationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.childTenancyIds">childTenancyIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.includeOrganization">includeOrganization</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.includeResourceMetadata">includeResourceMetadata</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.recommendationId">recommendationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.recommendationName">recommendationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.filter"></a>

```java
public DataOciOptimizerResourceActionsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList">DataOciOptimizerResourceActionsFilterList</a>

---

##### `resourceActionCollection`<sup>Required</sup> <a name="resourceActionCollection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.resourceActionCollection"></a>

```java
public DataOciOptimizerResourceActionsResourceActionCollectionList getResourceActionCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList">DataOciOptimizerResourceActionsResourceActionCollectionList</a>

---

##### `childTenancyIdsInput`<sup>Optional</sup> <a name="childTenancyIdsInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.childTenancyIdsInput"></a>

```java
public java.util.List<java.lang.String> getChildTenancyIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.compartmentIdInSubtreeInput"></a>

```java
public java.lang.Object getCompartmentIdInSubtreeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter">DataOciOptimizerResourceActionsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeOrganizationInput`<sup>Optional</sup> <a name="includeOrganizationInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.includeOrganizationInput"></a>

```java
public java.lang.Object getIncludeOrganizationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeResourceMetadataInput`<sup>Optional</sup> <a name="includeResourceMetadataInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.includeResourceMetadataInput"></a>

```java
public java.lang.Object getIncludeResourceMetadataInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recommendationIdInput`<sup>Optional</sup> <a name="recommendationIdInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.recommendationIdInput"></a>

```java
public java.lang.String getRecommendationIdInput();
```

- *Type:* java.lang.String

---

##### `recommendationNameInput`<sup>Optional</sup> <a name="recommendationNameInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.recommendationNameInput"></a>

```java
public java.lang.String getRecommendationNameInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `childTenancyIds`<sup>Required</sup> <a name="childTenancyIds" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.childTenancyIds"></a>

```java
public java.util.List<java.lang.String> getChildTenancyIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includeOrganization`<sup>Required</sup> <a name="includeOrganization" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.includeOrganization"></a>

```java
public java.lang.Object getIncludeOrganization();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeResourceMetadata`<sup>Required</sup> <a name="includeResourceMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.includeResourceMetadata"></a>

```java
public java.lang.Object getIncludeResourceMetadata();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recommendationId`<sup>Required</sup> <a name="recommendationId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.recommendationId"></a>

```java
public java.lang.String getRecommendationId();
```

- *Type:* java.lang.String

---

##### `recommendationName`<sup>Required</sup> <a name="recommendationName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.recommendationName"></a>

```java
public java.lang.String getRecommendationName();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOptimizerResourceActionsConfig <a name="DataOciOptimizerResourceActionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_resource_actions.DataOciOptimizerResourceActionsConfig;

DataOciOptimizerResourceActionsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .compartmentIdInSubtree(java.lang.Boolean)
    .compartmentIdInSubtree(IResolvable)
//  .childTenancyIds(java.util.List<java.lang.String>)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOptimizerResourceActionsFilter>)
//  .id(java.lang.String)
//  .includeOrganization(java.lang.Boolean)
//  .includeOrganization(IResolvable)
//  .includeResourceMetadata(java.lang.Boolean)
//  .includeResourceMetadata(IResolvable)
//  .name(java.lang.String)
//  .recommendationId(java.lang.String)
//  .recommendationName(java.lang.String)
//  .resourceType(java.lang.String)
//  .state(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#compartment_id DataOciOptimizerResourceActions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#compartment_id_in_subtree DataOciOptimizerResourceActions#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.childTenancyIds">childTenancyIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#child_tenancy_ids DataOciOptimizerResourceActions#child_tenancy_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter">DataOciOptimizerResourceActionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#id DataOciOptimizerResourceActions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.includeOrganization">includeOrganization</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#include_organization DataOciOptimizerResourceActions#include_organization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.includeResourceMetadata">includeResourceMetadata</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#include_resource_metadata DataOciOptimizerResourceActions#include_resource_metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#name DataOciOptimizerResourceActions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.recommendationId">recommendationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#recommendation_id DataOciOptimizerResourceActions#recommendation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.recommendationName">recommendationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#recommendation_name DataOciOptimizerResourceActions#recommendation_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#resource_type DataOciOptimizerResourceActions#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#state DataOciOptimizerResourceActions#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#status DataOciOptimizerResourceActions#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#compartment_id DataOciOptimizerResourceActions#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#compartment_id_in_subtree DataOciOptimizerResourceActions#compartment_id_in_subtree}.

---

##### `childTenancyIds`<sup>Optional</sup> <a name="childTenancyIds" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.childTenancyIds"></a>

```java
public java.util.List<java.lang.String> getChildTenancyIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#child_tenancy_ids DataOciOptimizerResourceActions#child_tenancy_ids}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter">DataOciOptimizerResourceActionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#filter DataOciOptimizerResourceActions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#id DataOciOptimizerResourceActions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeOrganization`<sup>Optional</sup> <a name="includeOrganization" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.includeOrganization"></a>

```java
public java.lang.Object getIncludeOrganization();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#include_organization DataOciOptimizerResourceActions#include_organization}.

---

##### `includeResourceMetadata`<sup>Optional</sup> <a name="includeResourceMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.includeResourceMetadata"></a>

```java
public java.lang.Object getIncludeResourceMetadata();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#include_resource_metadata DataOciOptimizerResourceActions#include_resource_metadata}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#name DataOciOptimizerResourceActions#name}.

---

##### `recommendationId`<sup>Optional</sup> <a name="recommendationId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.recommendationId"></a>

```java
public java.lang.String getRecommendationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#recommendation_id DataOciOptimizerResourceActions#recommendation_id}.

---

##### `recommendationName`<sup>Optional</sup> <a name="recommendationName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.recommendationName"></a>

```java
public java.lang.String getRecommendationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#recommendation_name DataOciOptimizerResourceActions#recommendation_name}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#resource_type DataOciOptimizerResourceActions#resource_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#state DataOciOptimizerResourceActions#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#status DataOciOptimizerResourceActions#status}.

---

### DataOciOptimizerResourceActionsFilter <a name="DataOciOptimizerResourceActionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_resource_actions.DataOciOptimizerResourceActionsFilter;

DataOciOptimizerResourceActionsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#name DataOciOptimizerResourceActions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#values DataOciOptimizerResourceActions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#regex DataOciOptimizerResourceActions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#name DataOciOptimizerResourceActions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#values DataOciOptimizerResourceActions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_resource_actions#regex DataOciOptimizerResourceActions#regex}.

---

### DataOciOptimizerResourceActionsResourceActionCollection <a name="DataOciOptimizerResourceActionsResourceActionCollection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_resource_actions.DataOciOptimizerResourceActionsResourceActionCollection;

DataOciOptimizerResourceActionsResourceActionCollection.builder()
    .build();
```


### DataOciOptimizerResourceActionsResourceActionCollectionItems <a name="DataOciOptimizerResourceActionsResourceActionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_resource_actions.DataOciOptimizerResourceActionsResourceActionCollectionItems;

DataOciOptimizerResourceActionsResourceActionCollectionItems.builder()
    .build();
```


### DataOciOptimizerResourceActionsResourceActionCollectionItemsAction <a name="DataOciOptimizerResourceActionsResourceActionCollectionItemsAction" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_resource_actions.DataOciOptimizerResourceActionsResourceActionCollectionItemsAction;

DataOciOptimizerResourceActionsResourceActionCollectionItemsAction.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOptimizerResourceActionsFilterList <a name="DataOciOptimizerResourceActionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_resource_actions.DataOciOptimizerResourceActionsFilterList;

new DataOciOptimizerResourceActionsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.get"></a>

```java
public DataOciOptimizerResourceActionsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter">DataOciOptimizerResourceActionsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter">DataOciOptimizerResourceActionsFilter</a>>

---


### DataOciOptimizerResourceActionsFilterOutputReference <a name="DataOciOptimizerResourceActionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_resource_actions.DataOciOptimizerResourceActionsFilterOutputReference;

new DataOciOptimizerResourceActionsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter">DataOciOptimizerResourceActionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsFilter">DataOciOptimizerResourceActionsFilter</a>

---


### DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList <a name="DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_resource_actions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList;

new DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.get"></a>

```java
public DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference <a name="DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_resource_actions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference;

new DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsAction">DataOciOptimizerResourceActionsResourceActionCollectionItemsAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference.property.internalValue"></a>

```java
public DataOciOptimizerResourceActionsResourceActionCollectionItemsAction getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsAction">DataOciOptimizerResourceActionsResourceActionCollectionItemsAction</a>

---


### DataOciOptimizerResourceActionsResourceActionCollectionItemsList <a name="DataOciOptimizerResourceActionsResourceActionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_resource_actions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList;

new DataOciOptimizerResourceActionsResourceActionCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.get"></a>

```java
public DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference <a name="DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_resource_actions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference;

new DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.action">action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList">DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.categoryId">categoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.compartmentName">compartmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.estimatedCostSaving">estimatedCostSaving</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.extendedMetadata">extendedMetadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.recommendationId">recommendationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.resourceActionId">resourceActionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.timeStatusBegin">timeStatusBegin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.timeStatusEnd">timeStatusEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItems">DataOciOptimizerResourceActionsResourceActionCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.action"></a>

```java
public DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList getAction();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList">DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList</a>

---

##### `categoryId`<sup>Required</sup> <a name="categoryId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.categoryId"></a>

```java
public java.lang.String getCategoryId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentName`<sup>Required</sup> <a name="compartmentName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.compartmentName"></a>

```java
public java.lang.String getCompartmentName();
```

- *Type:* java.lang.String

---

##### `estimatedCostSaving`<sup>Required</sup> <a name="estimatedCostSaving" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.estimatedCostSaving"></a>

```java
public java.lang.Number getEstimatedCostSaving();
```

- *Type:* java.lang.Number

---

##### `extendedMetadata`<sup>Required</sup> <a name="extendedMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.extendedMetadata"></a>

```java
public StringMap getExtendedMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recommendationId`<sup>Required</sup> <a name="recommendationId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.recommendationId"></a>

```java
public java.lang.String getRecommendationId();
```

- *Type:* java.lang.String

---

##### `resourceActionId`<sup>Required</sup> <a name="resourceActionId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.resourceActionId"></a>

```java
public java.lang.String getResourceActionId();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeStatusBegin`<sup>Required</sup> <a name="timeStatusBegin" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.timeStatusBegin"></a>

```java
public java.lang.String getTimeStatusBegin();
```

- *Type:* java.lang.String

---

##### `timeStatusEnd`<sup>Required</sup> <a name="timeStatusEnd" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.timeStatusEnd"></a>

```java
public java.lang.String getTimeStatusEnd();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciOptimizerResourceActionsResourceActionCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItems">DataOciOptimizerResourceActionsResourceActionCollectionItems</a>

---


### DataOciOptimizerResourceActionsResourceActionCollectionList <a name="DataOciOptimizerResourceActionsResourceActionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_resource_actions.DataOciOptimizerResourceActionsResourceActionCollectionList;

new DataOciOptimizerResourceActionsResourceActionCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.get"></a>

```java
public DataOciOptimizerResourceActionsResourceActionCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOptimizerResourceActionsResourceActionCollectionOutputReference <a name="DataOciOptimizerResourceActionsResourceActionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_resource_actions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference;

new DataOciOptimizerResourceActionsResourceActionCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList">DataOciOptimizerResourceActionsResourceActionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollection">DataOciOptimizerResourceActionsResourceActionCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.property.items"></a>

```java
public DataOciOptimizerResourceActionsResourceActionCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionItemsList">DataOciOptimizerResourceActionsResourceActionCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollectionOutputReference.property.internalValue"></a>

```java
public DataOciOptimizerResourceActionsResourceActionCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerResourceActions.DataOciOptimizerResourceActionsResourceActionCollection">DataOciOptimizerResourceActionsResourceActionCollection</a>

---



