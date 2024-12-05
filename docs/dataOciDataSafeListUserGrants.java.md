# `dataOciDataSafeListUserGrants` Submodule <a name="`dataOciDataSafeListUserGrants` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeListUserGrants <a name="DataOciDataSafeListUserGrants" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants oci_data_safe_list_user_grants}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_list_user_grants.DataOciDataSafeListUserGrants;

DataOciDataSafeListUserGrants.Builder.create(Construct scope, java.lang.String id)
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
    .userAssessmentId(java.lang.String)
    .userKey(java.lang.String)
//  .depthLevel(java.lang.Number)
//  .depthLevelGreaterThanOrEqualTo(java.lang.Number)
//  .depthLevelLessThan(java.lang.Number)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeListUserGrantsFilter>)
//  .grantKey(java.lang.String)
//  .grantName(java.lang.String)
//  .id(java.lang.String)
//  .privilegeCategory(java.lang.String)
//  .privilegeType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.userAssessmentId">userAssessmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_assessment_id DataOciDataSafeListUserGrants#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.userKey">userKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_key DataOciDataSafeListUserGrants#user_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.depthLevel">depthLevel</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level DataOciDataSafeListUserGrants#depth_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.depthLevelGreaterThanOrEqualTo">depthLevelGreaterThanOrEqualTo</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_greater_than_or_equal_to DataOciDataSafeListUserGrants#depth_level_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.depthLevelLessThan">depthLevelLessThan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_less_than DataOciDataSafeListUserGrants#depth_level_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.grantKey">grantKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_key DataOciDataSafeListUserGrants#grant_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.grantName">grantName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_name DataOciDataSafeListUserGrants#grant_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#id DataOciDataSafeListUserGrants#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.privilegeCategory">privilegeCategory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_category DataOciDataSafeListUserGrants#privilege_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.privilegeType">privilegeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_type DataOciDataSafeListUserGrants#privilege_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.userAssessmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_assessment_id DataOciDataSafeListUserGrants#user_assessment_id}.

---

##### `userKey`<sup>Required</sup> <a name="userKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.userKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_key DataOciDataSafeListUserGrants#user_key}.

---

##### `depthLevel`<sup>Optional</sup> <a name="depthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.depthLevel"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level DataOciDataSafeListUserGrants#depth_level}.

---

##### `depthLevelGreaterThanOrEqualTo`<sup>Optional</sup> <a name="depthLevelGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.depthLevelGreaterThanOrEqualTo"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_greater_than_or_equal_to DataOciDataSafeListUserGrants#depth_level_greater_than_or_equal_to}.

---

##### `depthLevelLessThan`<sup>Optional</sup> <a name="depthLevelLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.depthLevelLessThan"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_less_than DataOciDataSafeListUserGrants#depth_level_less_than}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#filter DataOciDataSafeListUserGrants#filter}

---

##### `grantKey`<sup>Optional</sup> <a name="grantKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.grantKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_key DataOciDataSafeListUserGrants#grant_key}.

---

##### `grantName`<sup>Optional</sup> <a name="grantName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.grantName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_name DataOciDataSafeListUserGrants#grant_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#id DataOciDataSafeListUserGrants#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privilegeCategory`<sup>Optional</sup> <a name="privilegeCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.privilegeCategory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_category DataOciDataSafeListUserGrants#privilege_category}.

---

##### `privilegeType`<sup>Optional</sup> <a name="privilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.privilegeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_type DataOciDataSafeListUserGrants#privilege_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevel">resetDepthLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelGreaterThanOrEqualTo">resetDepthLevelGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelLessThan">resetDepthLevelLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantKey">resetGrantKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantName">resetGrantName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeCategory">resetPrivilegeCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeType">resetPrivilegeType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDataSafeListUserGrantsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>>

---

##### `resetDepthLevel` <a name="resetDepthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevel"></a>

```java
public void resetDepthLevel()
```

##### `resetDepthLevelGreaterThanOrEqualTo` <a name="resetDepthLevelGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelGreaterThanOrEqualTo"></a>

```java
public void resetDepthLevelGreaterThanOrEqualTo()
```

##### `resetDepthLevelLessThan` <a name="resetDepthLevelLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelLessThan"></a>

```java
public void resetDepthLevelLessThan()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetGrantKey` <a name="resetGrantKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantKey"></a>

```java
public void resetGrantKey()
```

##### `resetGrantName` <a name="resetGrantName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantName"></a>

```java
public void resetGrantName()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetId"></a>

```java
public void resetId()
```

##### `resetPrivilegeCategory` <a name="resetPrivilegeCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeCategory"></a>

```java
public void resetPrivilegeCategory()
```

##### `resetPrivilegeType` <a name="resetPrivilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeType"></a>

```java
public void resetPrivilegeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeListUserGrants resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_list_user_grants.DataOciDataSafeListUserGrants;

DataOciDataSafeListUserGrants.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_list_user_grants.DataOciDataSafeListUserGrants;

DataOciDataSafeListUserGrants.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_list_user_grants.DataOciDataSafeListUserGrants;

DataOciDataSafeListUserGrants.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_list_user_grants.DataOciDataSafeListUserGrants;

DataOciDataSafeListUserGrants.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataSafeListUserGrants.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataSafeListUserGrants resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataSafeListUserGrants to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataSafeListUserGrants that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeListUserGrants to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList">DataOciDataSafeListUserGrantsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grants">grants</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList">DataOciDataSafeListUserGrantsGrantsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualToInput">depthLevelGreaterThanOrEqualToInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelInput">depthLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThanInput">depthLevelLessThanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKeyInput">grantKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantNameInput">grantNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategoryInput">privilegeCategoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeTypeInput">privilegeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentIdInput">userAssessmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKeyInput">userKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevel">depthLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualTo">depthLevelGreaterThanOrEqualTo</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThan">depthLevelLessThan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKey">grantKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantName">grantName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategory">privilegeCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeType">privilegeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentId">userAssessmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKey">userKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filter"></a>

```java
public DataOciDataSafeListUserGrantsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList">DataOciDataSafeListUserGrantsFilterList</a>

---

##### `grants`<sup>Required</sup> <a name="grants" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grants"></a>

```java
public DataOciDataSafeListUserGrantsGrantsList getGrants();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList">DataOciDataSafeListUserGrantsGrantsList</a>

---

##### `depthLevelGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="depthLevelGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualToInput"></a>

```java
public java.lang.Number getDepthLevelGreaterThanOrEqualToInput();
```

- *Type:* java.lang.Number

---

##### `depthLevelInput`<sup>Optional</sup> <a name="depthLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelInput"></a>

```java
public java.lang.Number getDepthLevelInput();
```

- *Type:* java.lang.Number

---

##### `depthLevelLessThanInput`<sup>Optional</sup> <a name="depthLevelLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThanInput"></a>

```java
public java.lang.Number getDepthLevelLessThanInput();
```

- *Type:* java.lang.Number

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>>

---

##### `grantKeyInput`<sup>Optional</sup> <a name="grantKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKeyInput"></a>

```java
public java.lang.String getGrantKeyInput();
```

- *Type:* java.lang.String

---

##### `grantNameInput`<sup>Optional</sup> <a name="grantNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantNameInput"></a>

```java
public java.lang.String getGrantNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `privilegeCategoryInput`<sup>Optional</sup> <a name="privilegeCategoryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategoryInput"></a>

```java
public java.lang.String getPrivilegeCategoryInput();
```

- *Type:* java.lang.String

---

##### `privilegeTypeInput`<sup>Optional</sup> <a name="privilegeTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeTypeInput"></a>

```java
public java.lang.String getPrivilegeTypeInput();
```

- *Type:* java.lang.String

---

##### `userAssessmentIdInput`<sup>Optional</sup> <a name="userAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentIdInput"></a>

```java
public java.lang.String getUserAssessmentIdInput();
```

- *Type:* java.lang.String

---

##### `userKeyInput`<sup>Optional</sup> <a name="userKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKeyInput"></a>

```java
public java.lang.String getUserKeyInput();
```

- *Type:* java.lang.String

---

##### `depthLevel`<sup>Required</sup> <a name="depthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevel"></a>

```java
public java.lang.Number getDepthLevel();
```

- *Type:* java.lang.Number

---

##### `depthLevelGreaterThanOrEqualTo`<sup>Required</sup> <a name="depthLevelGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualTo"></a>

```java
public java.lang.Number getDepthLevelGreaterThanOrEqualTo();
```

- *Type:* java.lang.Number

---

##### `depthLevelLessThan`<sup>Required</sup> <a name="depthLevelLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThan"></a>

```java
public java.lang.Number getDepthLevelLessThan();
```

- *Type:* java.lang.Number

---

##### `grantKey`<sup>Required</sup> <a name="grantKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKey"></a>

```java
public java.lang.String getGrantKey();
```

- *Type:* java.lang.String

---

##### `grantName`<sup>Required</sup> <a name="grantName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantName"></a>

```java
public java.lang.String getGrantName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `privilegeCategory`<sup>Required</sup> <a name="privilegeCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategory"></a>

```java
public java.lang.String getPrivilegeCategory();
```

- *Type:* java.lang.String

---

##### `privilegeType`<sup>Required</sup> <a name="privilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeType"></a>

```java
public java.lang.String getPrivilegeType();
```

- *Type:* java.lang.String

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentId"></a>

```java
public java.lang.String getUserAssessmentId();
```

- *Type:* java.lang.String

---

##### `userKey`<sup>Required</sup> <a name="userKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKey"></a>

```java
public java.lang.String getUserKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeListUserGrantsConfig <a name="DataOciDataSafeListUserGrantsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_list_user_grants.DataOciDataSafeListUserGrantsConfig;

DataOciDataSafeListUserGrantsConfig.builder()
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
    .userAssessmentId(java.lang.String)
    .userKey(java.lang.String)
//  .depthLevel(java.lang.Number)
//  .depthLevelGreaterThanOrEqualTo(java.lang.Number)
//  .depthLevelLessThan(java.lang.Number)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeListUserGrantsFilter>)
//  .grantKey(java.lang.String)
//  .grantName(java.lang.String)
//  .id(java.lang.String)
//  .privilegeCategory(java.lang.String)
//  .privilegeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userAssessmentId">userAssessmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_assessment_id DataOciDataSafeListUserGrants#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userKey">userKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_key DataOciDataSafeListUserGrants#user_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevel">depthLevel</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level DataOciDataSafeListUserGrants#depth_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelGreaterThanOrEqualTo">depthLevelGreaterThanOrEqualTo</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_greater_than_or_equal_to DataOciDataSafeListUserGrants#depth_level_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelLessThan">depthLevelLessThan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_less_than DataOciDataSafeListUserGrants#depth_level_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantKey">grantKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_key DataOciDataSafeListUserGrants#grant_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantName">grantName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_name DataOciDataSafeListUserGrants#grant_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#id DataOciDataSafeListUserGrants#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeCategory">privilegeCategory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_category DataOciDataSafeListUserGrants#privilege_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeType">privilegeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_type DataOciDataSafeListUserGrants#privilege_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userAssessmentId"></a>

```java
public java.lang.String getUserAssessmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_assessment_id DataOciDataSafeListUserGrants#user_assessment_id}.

---

##### `userKey`<sup>Required</sup> <a name="userKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userKey"></a>

```java
public java.lang.String getUserKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_key DataOciDataSafeListUserGrants#user_key}.

---

##### `depthLevel`<sup>Optional</sup> <a name="depthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevel"></a>

```java
public java.lang.Number getDepthLevel();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level DataOciDataSafeListUserGrants#depth_level}.

---

##### `depthLevelGreaterThanOrEqualTo`<sup>Optional</sup> <a name="depthLevelGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelGreaterThanOrEqualTo"></a>

```java
public java.lang.Number getDepthLevelGreaterThanOrEqualTo();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_greater_than_or_equal_to DataOciDataSafeListUserGrants#depth_level_greater_than_or_equal_to}.

---

##### `depthLevelLessThan`<sup>Optional</sup> <a name="depthLevelLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelLessThan"></a>

```java
public java.lang.Number getDepthLevelLessThan();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_less_than DataOciDataSafeListUserGrants#depth_level_less_than}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#filter DataOciDataSafeListUserGrants#filter}

---

##### `grantKey`<sup>Optional</sup> <a name="grantKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantKey"></a>

```java
public java.lang.String getGrantKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_key DataOciDataSafeListUserGrants#grant_key}.

---

##### `grantName`<sup>Optional</sup> <a name="grantName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantName"></a>

```java
public java.lang.String getGrantName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_name DataOciDataSafeListUserGrants#grant_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#id DataOciDataSafeListUserGrants#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privilegeCategory`<sup>Optional</sup> <a name="privilegeCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeCategory"></a>

```java
public java.lang.String getPrivilegeCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_category DataOciDataSafeListUserGrants#privilege_category}.

---

##### `privilegeType`<sup>Optional</sup> <a name="privilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeType"></a>

```java
public java.lang.String getPrivilegeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_type DataOciDataSafeListUserGrants#privilege_type}.

---

### DataOciDataSafeListUserGrantsFilter <a name="DataOciDataSafeListUserGrantsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_list_user_grants.DataOciDataSafeListUserGrantsFilter;

DataOciDataSafeListUserGrantsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#name DataOciDataSafeListUserGrants#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#values DataOciDataSafeListUserGrants#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#regex DataOciDataSafeListUserGrants#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#name DataOciDataSafeListUserGrants#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#values DataOciDataSafeListUserGrants#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#regex DataOciDataSafeListUserGrants#regex}.

---

### DataOciDataSafeListUserGrantsGrants <a name="DataOciDataSafeListUserGrantsGrants" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_list_user_grants.DataOciDataSafeListUserGrantsGrants;

DataOciDataSafeListUserGrantsGrants.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeListUserGrantsFilterList <a name="DataOciDataSafeListUserGrantsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_list_user_grants.DataOciDataSafeListUserGrantsFilterList;

new DataOciDataSafeListUserGrantsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.get"></a>

```java
public DataOciDataSafeListUserGrantsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>>

---


### DataOciDataSafeListUserGrantsFilterOutputReference <a name="DataOciDataSafeListUserGrantsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_list_user_grants.DataOciDataSafeListUserGrantsFilterOutputReference;

new DataOciDataSafeListUserGrantsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>

---


### DataOciDataSafeListUserGrantsGrantsList <a name="DataOciDataSafeListUserGrantsGrantsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_list_user_grants.DataOciDataSafeListUserGrantsGrantsList;

new DataOciDataSafeListUserGrantsGrantsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.get"></a>

```java
public DataOciDataSafeListUserGrantsGrantsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeListUserGrantsGrantsOutputReference <a name="DataOciDataSafeListUserGrantsGrantsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_list_user_grants.DataOciDataSafeListUserGrantsGrantsOutputReference;

new DataOciDataSafeListUserGrantsGrantsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.depthLevel">depthLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.grantName">grantName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeCategory">privilegeCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeType">privilegeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants">DataOciDataSafeListUserGrantsGrants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `depthLevel`<sup>Required</sup> <a name="depthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.depthLevel"></a>

```java
public java.lang.Number getDepthLevel();
```

- *Type:* java.lang.Number

---

##### `grantName`<sup>Required</sup> <a name="grantName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.grantName"></a>

```java
public java.lang.String getGrantName();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `privilegeCategory`<sup>Required</sup> <a name="privilegeCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeCategory"></a>

```java
public java.lang.String getPrivilegeCategory();
```

- *Type:* java.lang.String

---

##### `privilegeType`<sup>Required</sup> <a name="privilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeType"></a>

```java
public java.lang.String getPrivilegeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeListUserGrantsGrants getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants">DataOciDataSafeListUserGrantsGrants</a>

---



